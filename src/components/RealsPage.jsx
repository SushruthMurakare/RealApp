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
        <video
          key={real.videoUrl}
          ref={(el) => (videosRef.current[index] = el)}
          className="w-full h-[calc(100vh-56px)] object-cover snap-center"
          playsInline
        >
          <source src={"../../" + real.videoUrl} />
        </video>
      ))}
    </div>
  );
}
