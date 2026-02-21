import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-20 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center shadow-xl dark:shadow-rose-900/10"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    >
                        <source src="/video/Logistics Stock Video Of Roadways AirWays Seaways Railways - Cargo.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent"></div>

                    <div className="relative z-10 px-5 sm:px-8 md:px-16 max-w-3xl">


                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-4 sm:mb-6"
                        >
                            PRECISION HEAVY <br />HAULAGE SOLUTIONS
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-10 max-w-xl"
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

