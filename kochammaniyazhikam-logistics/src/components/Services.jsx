import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData.json';

const Services = () => {
    return (
        <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase text-slate-900 dark:text-white">EXPLORE KMAX LOGISTICS SERVICES</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData.map((service, index) => (
                        <Link to={`/services/${service.id}`} key={service.id} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 service-card group h-full flex flex-col hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative overflow-hidden h-48 shrink-0">
                                    <img
                                        alt={service.title}
                                        className="w-full h-full object-cover service-image transition-transform duration-500 group-hover:scale-110"
                                        src={service.image}
                                    />

                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                                        {service.shortDescription}
                                    </p>
                                    <div className="mt-auto pt-4 flex items-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        View Details <span className="ml-1">→</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 sm:mt-20 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 p-6 sm:p-8 md:p-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-rose-900/10"
                >
                    <div className="max-w-2xl">
                        <h3 className="text-2xl sm:text-3xl font-display font-extrabold mb-4 text-slate-900 dark:text-white">We deliver logistics solutions that move your business forward.</h3>
                        <p className="text-slate-500 dark:text-slate-400">Streamlining your heavy equipment supply chain with KMAX Logistics so you can focus on building the world's infrastructure without headaches.</p>
                    </div>
                    <Link to="/contact">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-4 transition-all whitespace-nowrap shadow-lg cursor-pointer"
                        >
                            Get a Quote
                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </span>
                        </motion.div>
                    </Link>
                </motion.div>
            </div >
        </section >
    );
};

export default Services;

