import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <h2>Calm Video Player</h2>
      <div className="video-container">
      <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/4ROrW727q_s?si=GUuooLbWU-dFde_l" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
        
      </iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
