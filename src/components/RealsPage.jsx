import { useState, useEffect } from "react";

export default function RealsPage() {
  const [reals, setReals] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/reals").then((response) =>
      response.json().then((data) => {
        setReals(data);
      })
    );
  }, []);

  const scrollDiv = document.getElementById("main-scroll");

  return (
    <div id="reals-scroll" className="h-[calc(100vh-56px)] overflow-y-auto">
      {reals?.reals.map((real) => (
        <video
          key={real.videoUrl}
          className="w-full h-[calc(100vh-56px)] object-cover"
        >
          <source src={"../../" + real.videoUrl} />
        </video>
      ))}
      {reals?.reals.map((real) => (
        <video
          key={real.videoUrl}
          className="w-full h-[calc(100vh-56px)] object-cover"
        >
          <source src={"../../" + real.videoUrl} />
        </video>
      ))}
      {reals?.reals.map((real) => (
        <video
          key={real.videoUrl}
          className="w-full h-[calc(100vh-56px)] object-cover"
        >
          <source src={"../../" + real.videoUrl} />
        </video>
      ))}
      {reals?.reals.map((real) => (
        <video
          key={real.videoUrl}
          className="w-full h-[calc(100vh-56px)] object-cover"
        >
          <source src={"../../" + real.videoUrl} />
        </video>
      ))}
    </div>
  );
}
