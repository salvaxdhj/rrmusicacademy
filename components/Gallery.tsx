import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
    const allImages = [
        ...IMAGES.gallery
    ];

    // Remove duplicates just in case
    const uniqueImages = Array.from(new Set(allImages));

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header Banner */}
            <div className="relative bg-rr-dark py-20 sm:py-28">
                <div className="absolute inset-0 overflow-hidden bg-rr-dark">
                    <img
                        src={IMAGES.galleryHeader}
                        alt="Galería RR"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-base font-semibold text-blue-200 tracking-wide uppercase">Nuestros Momentos</h2>
                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Galería de Fotos
                    </h1>
                    <p className="mt-4 max-w-2xl text-xl text-gray-200 mx-auto">
                        Revive la magia de nuestras presentaciones, clases y eventos especiales en RR Music Academy.
                    </p>
                </div>
            </div>

            {/* Photo Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {uniqueImages.map((src, index) => (
                        <div 
                            key={index} 
                            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 aspect-square max-w-[600px] mx-auto w-full"
                            onClick={() => openModal(src)}
                        >
                            <img 
                                src={src} 
                                alt={`Galería RR ${index + 1}`} 
                                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.parentElement!.style.display = 'none';
                                }}
                            />
                            <div className="absolute inset-0 bg-rr-blue/0 group-hover:bg-rr-blue/40 transition-colors duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 w-10 h-10" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
                    <button 
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    
                    <img 
                        src={selectedImage} 
                        alt="Vista ampliada" 
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;
