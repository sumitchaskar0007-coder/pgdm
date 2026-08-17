import React, { useEffect, useState } from 'react';
import { FiEdit2, FiPlus, FiTrash2 } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { videoAPI } from '../../api';

const emptyForm = { title: '', description: '', sourceType: 'upload', videoUrl: '', video: null };

export default function VideoAdmin() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const load = async () => {
    try { setVideos((await videoAPI.getAll()).data); }
    catch (_) { toast.error('Failed to load videos'); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const close = () => { setModal(false); setEditing(null); setForm(emptyForm); };
  const edit = (item) => {
    setEditing(item);
    setForm({ title: item.title, description: item.description || '', sourceType: item.sourceType, videoUrl: item.sourceType === 'link' ? item.videoUrl : '', video: null });
    setModal(true);
  };

  const submit = async (event) => {
    event.preventDefault();
    if (form.sourceType === 'upload' && !form.video && (!editing || editing.sourceType !== 'upload')) return toast.error('Choose a video file');
    if (form.sourceType === 'link' && !form.videoUrl.trim()) return toast.error('Enter a video link');
    const data = new FormData();
    data.append('title', form.title);
    data.append('description', form.description);
    data.append('sourceType', form.sourceType);
    if (form.sourceType === 'link') data.append('videoUrl', form.videoUrl.trim());
    if (form.video) data.append('video', form.video);
    setSaving(true);
    try {
      if (editing) await videoAPI.update(editing._id, data);
      else await videoAPI.create(data);
      toast.success(editing ? 'Video updated successfully' : 'Video added successfully');
      close();
      await load();
    } catch (error) { toast.error(error.response?.data?.message || 'Video operation failed'); }
    finally { setSaving(false); }
  };

  const remove = async (item) => {
    if (!window.confirm(`Delete “${item.title}”?`)) return;
    try { await videoAPI.delete(item._id); toast.success('Video deleted'); await load(); }
    catch (_) { toast.error('Delete failed'); }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold">Video Management</h1>
          <button onClick={() => setModal(true)} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"><FiPlus /> Add Video</button>
        </div>
        {loading ? <p>Loading...</p> : !videos.length ? <div className="bg-white rounded-lg p-10 text-center text-gray-600">No videos added yet.</div> : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((item) => <article key={item._id} className="bg-white rounded-lg shadow overflow-hidden"><img src={item.thumbnailUrl || '/assets/images/video-default.svg'} onError={(e) => { e.currentTarget.src = '/assets/images/video-default.svg'; }} alt="" className="w-full aspect-video object-cover" /><div className="p-4"><div className="flex justify-between gap-3"><div><h2 className="font-semibold text-lg">{item.title}</h2><p className="text-sm text-gray-600 line-clamp-2">{item.description}</p><span className="inline-block mt-2 text-xs uppercase bg-blue-100 text-blue-800 rounded px-2 py-1">{item.sourceType}</span></div><div className="flex gap-3"><button onClick={() => edit(item)} className="text-blue-600" aria-label="Edit"><FiEdit2 /></button><button onClick={() => remove(item)} className="text-red-600" aria-label="Delete"><FiTrash2 /></button></div></div></div></article>)}
          </div>
        )}
      </div>
      {modal && <div className="fixed inset-0 z-[60] bg-black/70 p-4 flex items-center justify-center"><div className="bg-white w-full max-w-lg rounded-xl p-6 max-h-[90vh] overflow-y-auto"><h2 className="text-2xl font-bold mb-5">{editing ? 'Edit Video' : 'Add Video'}</h2><form onSubmit={submit} className="space-y-4"><label className="block"><span className="text-sm font-medium">Title</span><input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="mt-1 w-full border rounded px-3 py-2" /></label><label className="block"><span className="text-sm font-medium">Description</span><textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1 w-full border rounded px-3 py-2" rows="3" /></label><fieldset><legend className="text-sm font-medium mb-2">Video source</legend><div className="flex gap-5"><label><input type="radio" checked={form.sourceType === 'upload'} onChange={() => setForm({ ...form, sourceType: 'upload' })} /> Upload file</label><label><input type="radio" checked={form.sourceType === 'link'} onChange={() => setForm({ ...form, sourceType: 'link', video: null })} /> Video link</label></div></fieldset>{form.sourceType === 'upload' ? <label className="block"><span className="text-sm font-medium">Video file</span><input type="file" accept="video/*" onChange={(e) => setForm({ ...form, video: e.target.files?.[0] || null })} className="mt-1 w-full" /><small className="text-gray-500">A thumbnail is generated automatically from the uploaded video.</small></label> : <label className="block"><span className="text-sm font-medium">Video URL</span><input type="url" required placeholder="YouTube, Vimeo, or direct video URL" value={form.videoUrl} onChange={(e) => setForm({ ...form, videoUrl: e.target.value })} className="mt-1 w-full border rounded px-3 py-2" /><small className="text-gray-500">YouTube, Vimeo, direct files, and embeddable provider links are supported.</small></label>}<div className="flex gap-3 pt-2"><button disabled={saving} className="flex-1 bg-blue-600 disabled:bg-blue-300 text-white rounded py-2">{saving ? 'Saving...' : 'Save'}</button><button type="button" onClick={close} className="flex-1 bg-gray-200 rounded py-2">Cancel</button></div></form></div></div>}
    </div>
  );
}
