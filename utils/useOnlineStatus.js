import { useEffect, useState } from "react";

export default function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setIsOnline(false);
        });
        window.addEventListener("online", () => {
            setIsOnline(true);
        })
    }, []);

    return isOnline;
}