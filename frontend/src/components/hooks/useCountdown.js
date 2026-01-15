import { useEffect, useState } from "react";

export function useCountdown(expiresAt) {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const expiry = new Date(expiresAt).getTime();

        const tick = () => {
            const diff = Math.max(0, expiry - Date.now());
            setTimeLeft(diff);
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [expiresAt]);

    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);

    return {
        expired: timeLeft === 0,
        minutes,
        seconds,
    };
}
