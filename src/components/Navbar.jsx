import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import logo from '../assets/kmax-logo.jpg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const { pathname } = useLocation();

    const isActive = (path) => {
        if (path === '/' && pathname !== '/') return false;
        if (path.startsWith('/#')) return false; // Don't highlight hash links as active pages
        return pathname === path;
    };

    const linkClass = (path) => `hover:text-primary transition-colors ${isActive(path) ? 'text-primary font-bold' : ''}`;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
                ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm'
                : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="KMAX Logistics Logo" className="h-10 w-auto rounded-lg shadow-sm" />
                    <span className="text-xl font-display font-extrabold tracking-tight uppercase text-slate-800 dark:text-white">
                        KMAX Logistics
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <Link to="/" className={linkClass('/')}>Home</Link>
                    <Link to="/about" className={linkClass('/about')}>About</Link>
                    <Link to="/services" className={linkClass('/services')}>Services</Link>
                    <Link to="/faq" className={linkClass('/faq')}>FAQ</Link>
                    <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/contact" className="bg-primary hover:bg-rose-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-rose-500/20 active:scale-95 hidden sm:block">
                        Get Connected
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
