import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Videos = ({ darkMode }: { darkMode: boolean }) => {
  const videos = [
    'https://res.cloudinary.com/aayush009/video/upload/v1730142782/YASH-JOSHI/kfci2q67fz01ueumsmbp.mp4',
    'https://res.cloudinary.com/aayush009/video/upload/v1730142786/YASH-JOSHI/ysmom3xpa8pehg0axumc.mp4',
    'https://res.cloudinary.com/aayush009/video/upload/v1730295810/IMG_6433_dnozmz.mp4',
    'https://res.cloudinary.com/aayush009/video/upload/v1730295829/IMG_6216_oq7xqd.mp4',
  ];

  return (
    <section className="section min-h-screen py-32 w-full">
      <h2
        className={`text-6xl font-bold mb-16 bg-gradient-to-r ${
          darkMode ? 'from-blue-400 to-green-400' : 'from-blue-600 to-green-600'
        } text-transparent bg-clip-text text-center`}
      >
        PORTFOLIO
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[1920px] mx-auto px-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-container group relative aspect-[9/16] overflow-hidden rounded-lg hover:scale-105 transition-transform duration-500"
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className=" inset-0 w-full h-auto object-cover"
              onError={() => console.log(`Error loading video ${index + 1}`)}
            >
              <p>Sorry, your browser doesn’t support embedded videos.</p>
            </video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
