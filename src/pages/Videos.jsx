import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Play, X } from 'lucide-react';
import { videoAPI } from '../api';
import VideoPlayer from '../components/VideoPlayer';

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    videoAPI.getAll().then(({ data }) => setVideos(data)).catch(() => toast.error('Failed to load videos')).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="min-h-[50vh] flex items-center justify-center">Loading videos...</div>;

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-950 mb-8">Our Videos</h1>
        {!videos.length && <p className="text-center text-gray-600">No videos have been added yet.</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <button key={video._id} type="button" onClick={() => setSelected(video)} className="text-left bg-white rounded-xl shadow overflow-hidden hover:-translate-y-1 transition">
              <div className="relative aspect-video bg-blue-950">
                <img src={video.thumbnailUrl || '/assets/images/video-default.svg'} onError={(e) => { e.currentTarget.src = '/assets/images/video-default.svg'; }} alt={`${video.title} thumbnail`} className="w-full h-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center"><span className="w-16 h-16 rounded-full bg-white/90 text-blue-700 flex items-center justify-center shadow-lg"><Play className="h-7 w-7 fill-current" aria-hidden="true" /></span></span>
              </div>
              <div className="p-4"><h2 className="text-xl font-semibold">{video.title}</h2>{video.description && <p className="text-gray-600 mt-2 line-clamp-2">{video.description}</p>}</div>
            </button>
          ))}
        </div>
      </div>
      {selected && <div className="fixed inset-0 z-[60] bg-black/90 p-4 flex items-center justify-center" onClick={() => setSelected(null)}><div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}><button className="ml-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10" onClick={() => setSelected(null)} aria-label="Close video"><X className="h-6 w-6" aria-hidden="true" /></button><VideoPlayer video={selected} className="w-full aspect-video bg-black" /><h2 className="text-white text-xl mt-3">{selected.title}</h2><p className="text-gray-300">{selected.description}</p></div></div>}
    </section>
  );
}
