import { useEffect, useState } from "react";
import { Flame, Clock } from "lucide-react";

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
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent text-accent font-semibold text-sm">
      <div className="flex items-center gap-1.5">
        <Flame className="w-4 h-4" />
        <span>PROMOÇÃO: Sofá Retrátil (até 2m) + Higienização por R$150</span>
      </div>
      <span className="text-accent/60"></span>
      <div className="flex items-center gap-1">
        <Clock className="w-3.5 h-3.5 animate-pulse" />
        <span>expira em:</span>
        <span className="font-mono font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
