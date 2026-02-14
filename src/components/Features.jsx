import { Wrench, Building2, Truck, Wallet, Users, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FeatureItem = ({ icon: Icon, title, description, delay, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, delay }}
            onClick={onClick}
            className="flex items-start gap-6 cursor-pointer group p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
            <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-teal_accent group-hover:bg-primary transition-colors duration-300 flex items-center justify-center shadow-lg shadow-teal_accent/20 group-hover:shadow-primary/25">
                    <Icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" strokeWidth={1.5} />
                </div>
            </div>
            <div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const Features = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: Wrench,
            title: "ODC & OWC",
            description: "Over Dimensional Cargo Transportation & Over Weight Cargo Transportation.",
            path: "/services/isro-odc-owc-transportation"
        },
        {
            icon: Building2,
            title: "Modern Machinery",
            description: "We use modern & latest machines to create efficient and reliable works.",
            path: "/services/heavy-machinery-transportation"
        },
        {
            icon: Truck,
            title: "Powerful Vehicles",
            description: "Powerful Vehicles are the absolute guarantee of our vehicle hiring service.",
            path: "/services/trailer-transportation"
        },
        {
            icon: Wallet,
            title: "Affordable Prices",
            description: "KMAX Logistics provides all our services and solutions at quite reasonable prices.",
            path: "/contact"
        },
        {
            icon: Users,
            title: "Professional Team",
            description: "We are a team of experienced professionals working to build a better world.",
            path: "/about"
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Any client of our company receives full 24/7 support by our experienced consultants.",
            path: "/contact"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 0.1}
                            onClick={() => navigate(feature.path)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
