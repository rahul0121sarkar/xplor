import React from "react";
import { ChevronsRight } from 'lucide-react';

const Youtube = () => {
  const posts = [
    {
      id: 1,
      platform: "YouTube",
      title: "Your Gateway to Immersive 3D & XR Solutions for Industrial Products",
      hashtags: "#AR #VR #3D #AI #MachineLearning #Metaverse #Tech #Innovation #Web3 #AugmentedReality #VirtualReality #XR",
    },
    {
      id: 2,
      platform: "Instagram",
      title: "Your Gateway to Immersive 3D & XR Solutions for Industrial Products",
      hashtags: "#AR #VR #3D #AI #MachineLearning #Metaverse #Tech #Innovation #Web3 #AugmentedReality #VirtualReality #XR",
    },
  ];

  return (
    <section className="h-[80vh] w-full relative overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="w-full h-full object-cover absolute top-0 left-0">
        <source src="/video/banner.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/10 ent-sec flex flex-col items-center justify-center px-10">
        {posts.map((post, index) => (
          <div key={index} className="w-full max-w-7xl mb-6">
            {/* Platform Name */}
            <h2 className="text-white text-3xl ent-title font-bold mb-4">{post.platform}</h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-black/10 p-6 ent-card rounded-lg backdrop-blur-md relative">
                  <h3 className="text-white text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-300 text-xs mt-2">{post.hashtags}</p>

                  {/* Action Button */}
                  <div className="absolute bottom-3 -rotate-45 right-2 bg-[#4F8A8B] w-10 h-10 flex items-center justify-center rounded-full">
                    <span className="text-white text-lg">   <ChevronsRight /></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Youtube;
