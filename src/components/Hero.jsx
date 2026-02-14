import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-28 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 min-h-[600px] flex items-center shadow-xl dark:shadow-rose-900/10"
                >
                    <img
                        alt="Large logistics truck on highway"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPiV3pwKfK13PqGsNP-pUrHhz_5YFLec-y_HyxRqjlVozE0TJp5eXdTkDbWONQIJu5s4xfKnGydqa3Wc-84_Kg9hgBtTgvshQ2xvfRXSI5M6ZhMxkciUFoh10WQqaZDWh1fuGgaoFQHpJhQHVA1b_A3DmqLyKDcMXg14UfCYRFaV_8TNdtqWPEYQyqE2y949ainHL9QXbs2pehZNdAHoHd9jNJ3jGZJGCpUfBS4CAjKmDIaXclddxyliw2HXXGTvzHkfhvsqDfllI"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent"></div>

                    <div className="relative z-10 px-8 md:px-16 max-w-3xl">


                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6"
                        >
                            PRECISION HEAVY <br />HAULAGE SOLUTIONS
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="text-lg text-slate-300 mb-10 max-w-xl"
                        >
                            Simplify complex logistics, reduce overhead costs, and deliver oversized equipment faster with KMAX Logistics' specialized heavy machinery transport platform.
                        </motion.p>


                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

