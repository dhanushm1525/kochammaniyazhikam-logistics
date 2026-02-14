import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesCarousel = () => {
    // Initialize Embla with Autoplay plugin
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'center', skipSnaps: false },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const services = [
        { title: "Heavy Machinery Transportation", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVZRosGm_ise7MvB7Cr6x12lM6fAJjiVo0hahewojk2Kyr9tdhIcRUGQdVgTa4k7QUPcFWBfC3_XrKHdG2VKFVheLdKQBSHCBgF7a3VD9gg_moJ326dyg5lGhcTiu37zBWIa5TOAq6Ka0QAE1JsUf5voVZFZXAh9K9rZzSBzWMSm_d5jZX9mlFmt_vAzjjjYq2JhSvc7bxLYMx66cflCUmk8qQTzGknOT9dlDPNju6dsS1f5uQ-1rYBTGnLYu7M1XaPgl8oIJpcro" },
        { title: "ISRO ODC/OWC Transportation", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1SlpiWqteTu-ihkAtQbkZbXX1kp4KYTw5BZu1bhgEB3InY0vFVSMnpy0cTkIxoL6CsPH4QLRs_WHWinKIXp1TcTYBTG5-NAfGA4IWRFWh9yJD-VxiYTi7Xgm6Ie_0pslqc-RH8ClCxhQLc-IThNXw07xIZoroFhN1zJWAyhd0cequmTFoz3C0ZY8ouZAYgNKipsdc8j3y59LQOxd1DAsP-EByvklQwdNT5Krge8JuMeRUMoNdNHcQtDay3Ql5UAInXhsrmWJlz_0" },
        { title: "Metro Rail Transportation", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPiV3pwKfK13PqGsNP-pUrHhz_5YFLec-y_HyxRqjlVozE0TJp5eXdTkDbWONQIJu5s4xfKnGydqa3Wc-84_Kg9hgBtTgvshQ2xvfRXSI5M6ZhMxkciUFoh10WQqaZDWh1fuGgaoFQHpJhQHVA1b_A3DmqLyKDcMXg14UfCYRFaV_8TNdtqWPEYQyqE2y949ainHL9QXbs2pehZNdAHoHd9jNJ3jGZJGCpUfBS4CAjKmDIaXclddxyliw2HXXGTvzHkfhvsqDfllI" },
    ];

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

    return (
        <section className="py-12 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white uppercase">
                        Featured Services
                    </h2>
                </div>

                <div className="embla overflow-hidden relative rounded-3xl" ref={emblaRef}>
                    <div className="flex touch-pan-y -ml-4">
                        {services.map((service, index) => (
                            <div className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4 relative" key={index}>
                                <motion.div
                                    animate={{
                                        scale: selectedIndex === index ? 1 : 0.95,
                                        opacity: selectedIndex === index ? 1 : 0.7,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]"
                                >
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                        <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                                        <Link to="/services" className="text-white/80 hover:text-white flex items-center gap-2 group">
                                            Explore More
                                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? 'w-8 bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesCarousel;
