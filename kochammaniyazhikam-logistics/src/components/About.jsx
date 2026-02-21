import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                    <span className="text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-4 block">// ABOUT US //</span>
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold leading-tight mb-6 text-slate-900 dark:text-white">
                        Trusted Heavy Equipment <span className="text-primary">Transport Solutions</span>
                    </h2>
                    <div className="space-y-4 text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        <p>
                            Kochammaniyazhikam Logistics is a trusted provider of heavy equipment transport and industrial logistics solutions. We specialize in safe, efficient, and on-time movement of construction, mining, and industrial machinery across India. Our modern fleet, skilled operators, and experienced logistics team ensure every project is handled with precision and care.
                        </p>
                        <p>
                            With a strong focus on reliability and customer satisfaction, we offer end-to-end logistics support tailored to each client’s needs. From planning and loading to transport and delivery, our commitment is to provide dependable service that keeps your operations running smoothly and without delay.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 sm:gap-8">
                        {[
                            { value: "20+", unit: "YR", label: "Heavy Haul Expertise" },
                            { value: "500+", unit: "TR", label: "Specialized Trailers" },
                            { value: "60K+", unit: "TN", label: "Cargo Handled Daily" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-2xl sm:text-4xl font-extrabold mb-1 text-slate-900 dark:text-white">
                                    {stat.value} <span className="text-slate-400 text-base sm:text-2xl">{stat.unit}</span>
                                </div>
                                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-slate-100 dark:bg-slate-800/50 rounded-3xl p-8 relative overflow-hidden group"
                >
                    <img
                        alt="Warehouse worker checking inventory"
                        className="w-full h-[400px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPEccC7WxND_Rdw9w3pRSvJAm8P7iJKUSrEtb2Bk9sz96bF_2YGQyzMos7TFTpShVpKzXb4qJZX2wnxcNFcEVb5fo9g9SlEAbST3C6aeiTXxNoCxERgnHyeHdDZaf3Tx-zTZmivQg37JGl_hUaSlsKg0ixVAKI_ONsyXkNGBSMi1OsN9hrNR-xqa9QpsENJw9npaNruxvhg2yg46r-2sztlV7STNs9-zrD3oKFU9ZqfUxwkprlFJ9noRt231X0Nx-1K1sk1UQqyg"
                    />
                    <div className="mt-8 flex items-center justify-between">
                        <div>
                            <h4 className="font-bold text-xl mb-1 text-slate-900 dark:text-white">Our Experts</h4>
                            <p className="text-sm text-slate-500">Dedicated Logistics Team</p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="bg-primary w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg shadow-rose-500/20"
                        >
                            <span className="material-symbols-outlined">call</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

