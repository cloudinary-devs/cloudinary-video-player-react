import { useEffect, useRef } from 'react';
import cloudinary from 'cloudinary-video-player';

const VideoPlayer = ({ id, publicId, playerConfig, sourceConfig, ...props }) => {
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = cloudinary;

    const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
      cloud_name: 'demo',
      secure: true,
      controls: true,
      ...playerConfig,
    });
    player.source(publicId, sourceConfig);
  }, []);

  return (
    <video
      ref={playerRef}
      id={id}
      className="cld-video-player cld-fluid"
      {...props}
    />
  );
};

export default VideoPlayer;
