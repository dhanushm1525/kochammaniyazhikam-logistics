import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData.json';

const ServicesCarousel = () => {
    // Initialize Embla with Autoplay plugin
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'center', skipSnaps: false },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
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

    // Filter for high-resolution images
    const highResImages = [
        "/images/semi low bed trailer.jpeg",
        "/images/crane transport.jpeg",
        "/images/semi-low-bed-trailer-body-1000x1000.webp",
        "/images/high-bed-trailer-1000x1000.webp",
        "/images/excavator transport.png",
        "/images/door to door heavy transport.jpg"
    ];

    // Get all services and sub-services, then filter
    // Note: The original data structure has top-level services with sub-services.
    // We want to show the top-level service IF its image is high-res, 
    // OR show a sub-service if its image is high-res. 
    // However, the current map iterates over `servicesData` (top-level). 
    // Let's filter the top-level `servicesData` based on if their main image is in the list,
    // OR if we want to extract sub-services that match.
    // Given the previous code mapped `servicesData`, I will filter `servicesData` to finding items (either top-level or flattened sub-services) that match.
    // To be safe and show enough items, I'll flatten the list to include all matching sub-services as individual carousel items.

    const carouselItems = servicesData.flatMap(service => {
        const items = [];
        // Check main service image
        if (highResImages.includes(service.image)) {
            items.push(service);
        }
        // Check sub-services
        if (service.subServices) {
            service.subServices.forEach(sub => {
                if (highResImages.includes(sub.image)) {
                    // Start: Create a synthetic object for the carousel link
                    // We need a parent ID for the link. Using the parent service ID.
                    items.push({ ...sub, id: service.id, isSubService: true });
                }
            });
        }
        return items;
    }).slice(0, 5);

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
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

                <div className="embla overflow-visible relative" ref={emblaRef}>
                    <div className="flex touch-pan-y -ml-6">
                        {carouselItems.map((service, index) => (
                            <div className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_22%] min-w-0 pl-6 relative py-4" key={service.id}>
                                <motion.div
                                    animate={{
                                        scale: selectedIndex === index ? 1 : 0.9,
                                        opacity: selectedIndex === index ? 1 : 0.5,
                                        y: selectedIndex === index ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className={`relative rounded-[2rem] overflow-hidden shadow-2xl h-[350px] group cursor-pointer ${selectedIndex === index ? 'shadow-rose-900/20' : ''}`}
                                >
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Glassmorphism Content Card */}
                                    <div className="absolute bottom-4 left-4 right-4 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl z-20 text-white overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 z-[-1]"></div>
                                        <h3 className="text-2xl font-bold mb-2 leading-tight">{service.title}</h3>
                                        <p className="text-sm text-slate-200 line-clamp-2 mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            {service.shortDescription}
                                        </p>
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
                        ))}
                    </div>
                </div>

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
            </div>
        </section>
    );
};

export default ServicesCarousel;
