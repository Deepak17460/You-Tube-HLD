"use client"
import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const VideoPlayer = () => {
   const videoRef = useRef(null);
   console.log("hii");
   const src = "https://dpcode72.s3.amazonaws.com/dpcode.mp4.mp4";

   useEffect(() => {
       const video = videoRef.current;
       console.log("helo");
       
       if (!video) return; // Ensure video element is available

       if (Hls.isSupported()) {
           console.log("HLS is supported");
           const hls = new Hls();
           hls.attachMedia(video);
           hls.loadSource(src);
           hls.on(Hls.Events.MANIFEST_PARSED, function () {
               console.log("playing video");
               video.play();
           });
       } else {
           console.log('HLS is not supported');
           // Play from the original video file
           video.src = src;
           video.play();
       }
   }, [src]);

   return <video ref={videoRef} controls />;
};

export default VideoPlayer;
