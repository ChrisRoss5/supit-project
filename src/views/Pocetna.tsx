import { useState, useEffect } from "react";
import videoSrc from "@/assets/video/typingOnlaptop.mp4";

const msg = "Budi izvrstan u onom što vidiš!$$$######voliš!$$$$+ZAISKRI$$";

const Pocetna = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  useEffect(() => {
    let setLine = setLine1;
    let i = 0;
    const intervalId = setInterval(() => {
      if (i == msg.length) {
        setIsComplete(true);
        clearInterval(intervalId);
        return;
      }
      const char = msg[i++];
      if (char == "+") setLine = setLine2;
      else if (char != "$")
        setLine((line) => (char == "#" ? line.slice(0, -1) : line + char));
    }, 150);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main className="relative flex flex-1 items-center justify-center p-4">
        <video
          className="absolute h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div
          id="typewriter"
          className="z-10 text-[clamp(1rem,5vw,5rem)] text-white"
        >
          <div blinking={(!line2).toString()}>{line1}</div>
          <span
            className="text-red-500"
            blinking={(line2 && !isComplete).toString()}
          >
            {line2}
          </span>
          {isComplete && <span blinking="true">.</span>}
        </div>
      </main>
    </>
  );
};

export default Pocetna;
