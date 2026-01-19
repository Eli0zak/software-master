import { useState } from "react";

export const Logo3D = ({ className = "" }: { className?: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`relative ${className}`}>
            <div
                className="relative transition-all duration-700 ease-out will-change-transform"
                style={{
                    transform: isHovered
                        ? "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1.05) translateZ(10px)"
                        : "perspective(1200px) rotateY(-15deg) rotateX(8deg)",
                    transformStyle: "preserve-3d",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Main Logo */}
                <img
                    src="/src/assets/logo-secondary.svg"
                    alt="Software Masters Logo"
                    className="w-full h-full relative z-10"
                    style={{
                        filter: isHovered
                            ? "drop-shadow(0 30px 60px rgba(0, 68, 204, 0.6)) drop-shadow(0 15px 30px rgba(1, 226, 118, 0.4))"
                            : "drop-shadow(0 20px 40px rgba(0, 68, 204, 0.4)) drop-shadow(0 10px 20px rgba(1, 226, 118, 0.3))",
                        transition: "filter 0.7s ease",
                    }}
                />

                {/* 3D Shadow Layer 1 - Blue */}
                <div
                    className="absolute inset-0 -z-10 transition-all duration-700"
                    style={{
                        transform: "translateZ(-30px)",
                        background: "linear-gradient(135deg, #0044CC 0%, #2267FC 100%)",
                        filter: "blur(30px)",
                        opacity: isHovered ? 0.7 : 0.5,
                        borderRadius: "20%",
                    }}
                />

                {/* 3D Shadow Layer 2 - Green */}
                <div
                    className="absolute inset-0 -z-20 transition-all duration-700"
                    style={{
                        transform: "translateZ(-50px)",
                        background: "linear-gradient(135deg, #01E276 0%, #39FF14 100%)",
                        filter: "blur(40px)",
                        opacity: isHovered ? 0.6 : 0.4,
                        borderRadius: "30%",
                    }}
                />

                {/* Animated Glow Ring */}
                <div
                    className="absolute inset-0 -z-30 animate-pulse"
                    style={{
                        transform: "translateZ(-70px) scale(1.2)",
                        background: "radial-gradient(circle, rgba(0,68,204,0.3) 0%, transparent 70%)",
                        filter: "blur(50px)",
                        opacity: isHovered ? 0.8 : 0.3,
                        transition: "opacity 0.7s ease",
                    }}
                />
            </div>
        </div>
    );
};
