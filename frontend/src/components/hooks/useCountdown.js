// import { useEffect, useState } from "react";

// export function useCountdown(expiresAt) {
//     const [timeLeft, setTimeLeft] = useState(0);

//     useEffect(() => {
//         const expiry = new Date(expiresAt).getTime();

//         const tick = () => {
//             const diff = Math.max(0, expiry - Date.now());
//             setTimeLeft(diff);
//         };

//         tick();
//         const interval = setInterval(tick, 1000);
//         return () => clearInterval(interval);
//     }, [expiresAt]);

//     const minutes = Math.floor(timeLeft / 60000);
//     const seconds = Math.floor((timeLeft % 60000) / 1000);

//     return {
//         expired: timeLeft === 0,
//         minutes,
//         seconds,
//     };
// }

//================================================================
import { useEffect, useState } from "react";

export function useCountdown(expiresAt) {
    const calcRemaining = () =>
        Math.max(0, new Date(expiresAt).getTime() - Date.now());

    const [remaining, setRemaining] = useState(calcRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(calcRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, [expiresAt]);

    const totalSeconds = Math.floor(remaining / 1000);

    return {
        expired: totalSeconds <= 0,
        minutes: Math.floor(totalSeconds / 60),
        seconds: totalSeconds % 60,
    };
}
