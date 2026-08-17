import React from 'react';

const getEmbedUrl = (value) => {
  try {
    const url = new URL(value);
    if (url.hostname === 'youtu.be') return `https://www.youtube.com/embed/${url.pathname.slice(1).split('/')[0]}`;
    if (url.hostname.endsWith('youtube.com')) {
      const id = url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)?.[1];
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (url.hostname.endsWith('vimeo.com')) {
      const id = url.pathname.split('/').filter(Boolean).find((part) => /^\d+$/.test(part));
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
  } catch (_) {
    return null;
  }
  return null;
};

const isDirectVideo = (url, sourceType) => sourceType === 'upload' || /\.(mp4|webm|ogg|mov|m4v)(?:$|[?#])/i.test(url);

export default function VideoPlayer({ video, controls = true, className = '' }) {
  const embedUrl = getEmbedUrl(video.videoUrl);
  if (embedUrl) {
    return <iframe className={className} src={embedUrl} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />;
  }
  if (isDirectVideo(video.videoUrl, video.sourceType)) {
    return <video className={className} src={video.videoUrl} poster={video.thumbnailUrl || '/assets/images/video-default.svg'} controls={controls} preload="metadata" />;
  }
  return <iframe className={className} src={video.videoUrl} title={video.title} allow="autoplay; fullscreen" allowFullScreen sandbox="allow-scripts allow-same-origin allow-presentation" />;
}
