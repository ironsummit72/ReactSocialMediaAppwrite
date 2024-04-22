import { useState, useRef } from 'react';

function VideoPlayer({ src, className ,autoPlay}) {
  const [isPlaying, setIsPlaying] = useState(true);
  return (

      <video src={src} className={className} autoPlay={autoPlay} muted={true}/>

  );
}

export default VideoPlayer;
