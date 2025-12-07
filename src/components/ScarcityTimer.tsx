import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function ScarcityTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Define o tempo de escassez (24 horas de agora)
      const now = new Date();
      const endTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);
      
      const diff = endTime.getTime() - now.getTime();
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-accent via-accent/80 to-accent text-white py-3 px-4">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 animate-spin" />
            <span className="font-bold text-sm md:text-base">
              Oferta por tempo limitado!
            </span>
          </div>
          <span className="text-white/80">|</span>
          <div className="flex gap-2 font-mono font-bold text-sm md:text-base">
            <span className="bg-white/20 px-2 py-1 rounded">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
