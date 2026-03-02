import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData.json';

const ServicesCarousel = () => {
    // Center alignment + loop ensures the highlighted item is always in the middle
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'center', skipSnaps: false, containScroll: false },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    // Use all top-level services for a balanced carousel with equal items on each side
    const carouselItems = servicesData;

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
            {/* Heading stays constrained */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Our Logistics Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Comprehensive transport solutions tailored for industrial needs.
                    </motion.p>
                </div>
            </div>

            {/* Carousel spans full viewport width — overflow-hidden clips both sides equally */}
            <div className="embla overflow-hidden relative" ref={emblaRef}>
                <div className="flex touch-pan-y items-center gap-4 px-2" style={{ minHeight: '460px' }}>
                    {carouselItems.map((service, index) => {
                        const isActive = selectedIndex === index;
                        return (
                            <div
                                className="flex-[0_0_75%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_20%] min-w-0 relative"
                                key={service.id}
                            >
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.12 : 0.92,
                                        y: isActive ? -12 : 0,
                                        zIndex: isActive ? 20 : 1,
                                    }}
                                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                    className={`relative rounded-[2rem] overflow-hidden group cursor-pointer transition-shadow duration-500 ${isActive
                                        ? 'shadow-[0_0_40px_rgba(225,29,72,0.45)] ring-[3px] ring-rose-500/70'
                                        : 'shadow-lg'
                                        }`}
                                    style={{
                                        height: isActive ? '400px' : '320px',
                                        transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    <div className={`absolute inset-0 transition-colors duration-500 z-10 ${isActive ? 'bg-slate-900/10' : 'bg-slate-900/30 group-hover:bg-slate-900/15'
                                        }`}></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Glassmorphism Content Card */}
                                    <div className={`absolute bottom-4 left-4 right-4 p-5 backdrop-blur-md border rounded-3xl z-20 text-white overflow-hidden transition-all duration-500 ${isActive
                                        ? 'bg-white/15 border-rose-400/50 p-6'
                                        : 'bg-white/10 border-white/20'
                                        }`}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 z-[-1]"></div>
                                        <h3 className={`font-bold mb-2 leading-tight transition-all duration-500 ${isActive ? 'text-xl' : 'text-sm'
                                            }`}>{service.title}</h3>

                                        {/* Description visible on active slide */}
                                        <motion.p
                                            animate={{
                                                opacity: isActive ? 1 : 0,
                                                height: isActive ? 'auto' : 0,
                                            }}
                                            transition={{ duration: 0.4 }}
                                            className="text-sm text-slate-200 line-clamp-2 mb-3 overflow-hidden"
                                        >
                                            {service.shortDescription}
                                        </motion.p>

                                        <Link
                                            to={`/services/${service.id}`}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white group/link"
                                        >
                                            View Details
                                            <span className="bg-white/20 p-1 rounded-full group-hover/link:bg-white/40 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-3 mt-10">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 rounded-full transition-all duration-500 ${index === selectedIndex ? 'w-10 bg-rose-600' : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-rose-400'}`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesCarousel;
