import { Ellipsis, Heart, MessageCircle, Share } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function RealsPage() {
  const [reals, setReals] = useState(null);
  const videosRef = useRef([]);

  useEffect(() => {
    fetch("http://localhost:3000/reals")
      .then((response) => response.json())
      .then((data) => setReals(data));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0; // Reset video when scrolled out
          }
        });
      },
      { threshold: 0.7 } // 70% of the video must be visible to trigger play
    );

    videosRef.current.forEach((video) => observer.observe(video));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [reals]);

  return (
    <div className="no-scrollbar h-[calc(100vh-56px)] overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {reals?.reals.map((real, index) => (
        <div
          key={real.videoUrl}
          className="relative w-full h-[calc(100vh-56px)] scroll-smooth snap-center"
        >
          {/* Video Element */}
          <video
            ref={(el) => (videosRef.current[index] = el)} // Assign ref dynamically
            className="w-full h-full object-cover"
            playsInline
            loop
          >
            <source src={"../../" + real.videoUrl} />
          </video>
          {/* Profile Picture & Description */}
          <div className="absolute bottom-0 left-0 w-full p-2 flex flex-col items-end">
            <div className="p-2 flex flex-col text-[10px] font-semibold text-white items-center gap-[1px]">
              <Heart size="26" />
              <p className="mb-4">{`${(200 * Math.random()).toFixed(1)}k`}</p>
              <MessageCircle size="26" />
              <p className="mb-4">{`${(50 * Math.random()).toFixed(1)}k`}</p>
              <Share size="26" className="mb-4" />
              <Ellipsis size="24" />
            </div>
            <div className="flex items-center w-full bg-gray-900/40 p-2 gap-2 rounded-lg">
              <img
                src={real.profilePicture} // Assuming API provides profilePicture
                alt="Profile"
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
              <div className="text-white">
                <p className="font-semibold text-sm">{real.username}</p>
                <p className="text-xs opacity-80">{real.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
