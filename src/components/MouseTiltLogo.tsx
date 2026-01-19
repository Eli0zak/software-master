import { useRef, useState, MouseEvent } from "react";
import logoPrimary from "@/assets/logo-primary.svg";

export const MouseTiltLogo = ({ className = "" }: { className?: string }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rX = (mouseY / height - 0.5) * 30; // Max rotation X (degrees)
        const rY = (mouseX / width - 0.5) * -30; // Max rotation Y (degrees)

        setRotate({ x: rX, y: rY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div
            ref={containerRef}
            className={`relative perspective-1000 flex items-center justify-center ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: "1000px",
            }}
        >
            <img
                src={logoPrimary}
                alt="Software Masters Logo"
                className="w-full h-full object-contain transition-transform duration-200 ease-out will-change-transform"
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                }}
            />
        </div>
    );
};
