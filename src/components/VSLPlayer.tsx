import React, { memo, useState } from 'react';
import { Play } from 'lucide-react';

interface VSLPlayerProps {
    videoId?: string;
}

const VSLPlayerComponent: React.FC<VSLPlayerProps> = ({ videoId = "IDxdmd8S-EQ" }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // URL da Thumbnail de alta qualidade
    // Tenta usar maxresdefault (720p/1080p), se falhar o YouTube geralmente retorna uma imagem padrão menor,
    // mas para Shorts o hq720 as vezes é melhor. Vamos tentar maxresdefault primeiro.
    const posterUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div className="w-full max-w-[400px] mx-auto mb-12 z-30 relative px-4 md:px-0">
            {/* Aspect Ratio Container 9:16 */}
            <div
                className="relative w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black"
                style={{ paddingBottom: '177.77%' }} // 16:9 invertido = 1.777...
            >
                {!isPlaying ? (
                    /* Facade (Capa + Botão Play) */
                    <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 w-full h-full block group cursor-pointer focus:outline-none"
                        aria-label="Reproduzir vídeo"
                    >
                        {/* Imagem de Fundo - Object Cover para preencher tudo (pode cortar laterais se for 16:9, mas centraliza)
                            Se quiser ver a imagem INTEIRA sem cortes, use object-contain (mas vai sobrar borda preta em cima/baixo)
                            Para Shorts, geralmente queremos COVER pois o vídeo é vertical no centro. */}
                        <img
                            src={posterUrl}
                            alt="Capa do Vídeo"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                        />

                        {/* Overlay Gradiente para dar destaque ao botão */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>

                        {/* Botão de Play Centralizado */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-20 h-20 bg-red-600/90 rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(237,0,42,0.6)] group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300 animate-pulse">
                                <Play className="w-8 h-8 text-white fill-white" />
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                            <p className="text-white font-bold text-sm uppercase tracking-wider drop-shadow-md">
                                Clique para assistir
                            </p>
                        </div>
                    </button>
                ) : (
                    /* Iframe do YouTube - Opção 1: Controls=0 para performance máxima e visual limpo */
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&controls=0&modestbranding=1&playsinline=1&disablekb=1`}
                        title="Player de Vídeo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default memo(VSLPlayerComponent);