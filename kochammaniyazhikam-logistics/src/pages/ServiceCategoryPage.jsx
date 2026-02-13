import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import servicesData from '../data/servicesData.json';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ServiceCategoryPage = () => {
    const { id } = useParams();
    const category = servicesData.find(service => service.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!category) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
                    <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
            <SEO
                title={category.title}
                description={category.shortDescription}
                keywords={`${category.title}, logistics, transportation, KMAX`}
                url={`/services/${id}`}
            />

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                    src={category.image}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/90"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/services" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Services
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white uppercase mb-6 leading-tight">
                            {category.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
                            {category.shortDescription}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">
                                Overview
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
                                {category.description}
                            </p>

                            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-8">
                                Our Services in this Category
                            </h3>

                            <div className="space-y-6">
                                {category.subServices && category.subServices.map((subService, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="bg-primary/10 p-2 rounded-full flex-shrink-0 mt-1">
                                                <CheckCircle className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{subService.title}</h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {subService.shortDescription}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-primary p-8 rounded-[2rem] text-white shadow-xl shadow-primary/20">
                                <h3 className="text-2xl font-bold mb-4">Need a Quote?</h3>
                                <p className="mb-6 opacity-90">
                                    Get a customized quote for your {category.title} needs today.
                                </p>
                                <Link
                                    to="/contact"
                                    className="block w-full bg-white text-primary text-center py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors"
                                >
                                    Contact Us Now
                                </Link>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Other Categories</h3>
                                <ul className="space-y-4">
                                    {servicesData.filter(s => s.id !== id).slice(0, 5).map(s => (
                                        <li key={s.id}>
                                            <Link
                                                to={`/services/${s.id}`}
                                                className="block text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-2 border-b border-slate-100 dark:border-slate-700 last:border-0"
                                            >
                                                {s.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServiceCategoryPage;
