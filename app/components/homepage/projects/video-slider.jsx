"use client"; // Add this for useState hooks to work properly

import React from 'react';

const VideoCarousel = ({ videosData }) => {
  const handleWatchNow = (url) => {
    window.open(url, '_blank'); // Open the video URL in a new tab
  };

  return (
    <div className="pt-24">
      {/* Wrapper for scrolling horizontally */}
      <div className="flex overflow-x-auto space-x-6 pb-6 justify-center">
        {videosData.map((video, index) => (
          <div
            key={index}
            className="video-card flex-none bg-black text-white rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            style={{ width: '320px' }} // Set the width for each card
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <iframe
                className="w-full h-64 object-cover"
                src={video.url}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="px-4 py-3">
              <p className="text-lg font-semibold">{video.title}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleWatchNow(video.videourl)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                >
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
