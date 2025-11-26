"use client";

import { useState, useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(error => {
        // Auto-play was prevented, handle it here
        console.error("Auto-play was prevented:", error);
      });
    }
  }, [showVideo]);

  if (!showVideo) {
    return null;
  }

  const handleClose = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{ position: 'relative', width: '80%', maxWidth: '960px' }}>
        <video ref={videoRef} src={src} style={{ width: '100%' }} controls autoPlay muted loop playsInline />
        <button onClick={handleClose} style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '10px 20px',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
