import { useEffect } from 'react';
import '@google/model-viewer';

interface GLBLogoProps {
    className?: string;
}

export const GLBLogo = ({ className = "" }: GLBLogoProps) => {
    useEffect(() => {
        import('@google/model-viewer');
    }, []);

    return (
        <div className={`w-full h-full ${className}`}>
            <model-viewer
                src="/logo-3d.glb"
                alt="Software Masters 3D Logo"
                auto-rotate
                camera-controls
                shadow-intensity="1"
                exposure="1"
                environment-image="neutral"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};
