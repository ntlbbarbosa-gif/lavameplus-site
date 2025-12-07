import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function ScarcityTimer() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 5,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endTime = new Date(now.getTime() + 5 * 60 * 1000);
      
      const diff = endTime.getTime() - now.getTime();
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/20 border border-accent">
      <Clock className="w-4 h-4 text-accent animate-spin" />
      <span className="text-accent font-semibold text-sm">Oferta expira em:</span>
      <div className="flex gap-1 font-mono font-bold text-accent">
        <span className="bg-accent/10 px-2 py-0.5 rounded text-xs">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span>:</span>
        <span className="bg-accent/10 px-2 py-0.5 rounded text-xs">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
