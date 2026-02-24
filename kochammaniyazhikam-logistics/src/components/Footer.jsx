import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import kmaxLogo from '../assets/kmax-logo.jpg';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="bg-slate-950 text-slate-300 relative overflow-hidden pt-12 pb-6">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal_accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Top Section: CTA & Newsletter */}
                {/* Top Section: CTA Only */}
                <div className="mb-10 border-b border-white/5 pb-10">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4 text-white leading-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">Scale Up?</span>
                        </h2>
                        <p className="text-slate-400 text-sm md:text-base max-w-lg">
                            Partner with KMAX Logistics for reliable, efficient, and specialized heavy haulage solutions tailored to your needs.
                        </p>
                    </div>
                </div>

                {/* Middle Section: Links & Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={kmaxLogo} alt="KMAX Logistics" className="h-8 w-auto rounded-md" />
                            <span className="text-lg font-display font-extrabold tracking-tight text-white">
                                KMAX
                            </span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed mb-4">
                            Leading the way in heavy haul transportation and project logistics across India. safe, reliable, and on time.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1 text-slate-400">
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm">Company</h3>
                        <ul className="space-y-2.5 text-xs md:text-sm">
                            {[
                                { label: "About Us", path: "/about" },
                                { label: "Our Services", path: "/services" },
                                { label: "FAQ", path: "/faq" },
                                { label: "Contact Us", path: "/contact" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link to={link.path} className="hover:text-primary transition-colors duration-200 block">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm">Services</h3>
                        <ul className="space-y-2.5 text-xs md:text-sm">
                            {[
                                { label: "Heavy Machinery Transport", path: "/services/heavy-machinery-transportation" },
                                { label: "Crane Services", path: "/services/crane-services" },
                                { label: "ODC Transport", path: "/services/odc-transportation" },
                                { label: "Trailer Transport", path: "/services/trailer-transportation" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link to={link.path} className="hover:text-primary transition-colors duration-200 block">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm">Contact</h3>
                        <ul className="space-y-2.5 text-xs md:text-sm">
                            <li className="flex items-start gap-2.5">
                                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                                <span>3/326-4, Sendamaram Main Road, Velayuthapuram, India</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone size={16} className="text-primary shrink-0" />
                                <span>+91 95476 29047</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail size={16} className="text-primary shrink-0" />
                                <span>hello@kmaxlogistics.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Legal */}
                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} KMAX Logistics. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={scrollToTop}
                            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary text-white transition-all group border border-white/5"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
