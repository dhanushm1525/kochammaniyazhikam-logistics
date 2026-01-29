
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const AboutUs = () => {
    return (
        <div className="pt-20 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
            <SEO
                title="About Us"
                description="Learn about Kochammaniyazhikam Logistics, a trusted provider of heavy equipment transport and industrial logistics solutions using modern fleets and skilled operators."
                keywords="about us, logistics company, heavy haulage experts, transport company profile"
                url="/about"
            />
            {/* Page Header */}
            <section className="relative h-[40vh] min-h-[300px] bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                    alt="Logistics fleet"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPiV3pwKfK13PqGsNP-pUrHhz_5YFLec-y_HyxRqjlVozE0TJp5eXdTkDbWONQIJu5s4xfKnGydqa3Wc-84_Kg9hgBtTgvshQ2xvfRXSI5M6ZhMxkciUFoh10WQqaZDWh1fuGgaoFQHpJhQHVA1b_A3DmqLyKDcMXg14UfCYRFaV_8TNdtqWPEYQyqE2y949ainHL9QXbs2pehZNdAHoHd9jNJ3jGZJGCpUfBS4CAjKmDIaXclddxyliw2HXXGTvzHkfhvsqDfllI"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>
                <div className="relative z-10 text-center px-4">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-display font-extrabold text-white uppercase"
                    >
                        About Us
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
                            Excellence in <span className="text-primary">Heavy Logistics</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                            <p>
                                Kochammaniyazhikam Logistics is a trusted provider of heavy equipment transport and
                                industrial logistics solutions. We specialize in safe, efficient, and on-time movement of
                                construction, mining, and industrial machinery across India. Our modern fleet, skilled
                                operators, and experienced logistics team ensure every project is handled with precision
                                and care.
                            </p>
                            <p>
                                With a strong focus on reliability and customer satisfaction, we offer end-to-end logistics
                                support tailored to each client’s needs. From planning and loading to transport and delivery,
                                our commitment is to provide dependable service that keeps your operations running
                                smoothly and without delay.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-l-4 border-primary">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Safety First</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Zero-compromise approach to cargo safety</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-l-4 border-primary">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">On-Time Delivery</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Precision scheduling for every project</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-3xl"></div>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPEccC7WxND_Rdw9w3pRSvJAm8P7iJKUSrEtb2Bk9sz96bF_2YGQyzMos7TFTpShVpKzXb4qJZX2wnxcNFcEVb5fo9g9SlEAbST3C6aeiTXxNoCxERgnHyeHdDZaf3Tx-zTZmivQg37JGl_hUaSlsKg0ixVAKI_ONsyXkNGBSMi1OsN9hrNR-xqa9QpsENJw9npaNruxvhg2yg46r-2sztlV7STNs9-zrD3oKFU9ZqfUxwkprlFJ9noRt231X0Nx-1K1sk1UQqyg"
                            alt="Warehouse operations"
                            className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
