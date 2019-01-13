import React from 'react'
// import "node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

 const VideoComponent = (props) => {
   const Url = <ReactPlayer url='https://www.youtube.com/watch?v=DWLKhcw7T2A' play />;
   console.log(Url)
  return (

    Url
    // <Player
    //   playsInline
    //   poster="/assets/poster.png"
    //   src = {Url}
    
    // />
    
  );
};
export default  VideoComponent