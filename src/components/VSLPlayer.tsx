
interface VSLPlayerProps {
    videoUrl: string;
}

export default function VSLPlayer({ videoUrl }: VSLPlayerProps) {
    return (
        <div className="w-full max-w-[300px] mx-auto mb-12 relative z-20 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden border border-red-900/50 bg-black/50 backdrop-blur-sm shadow-2xl">
                <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                >
                    <source src={videoUrl} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </div>
        </div>
    );
}
