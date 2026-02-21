import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/kmax-logo.jpg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const isActive = (path) => {
        if (path === '/' && pathname !== '/') return false;
        if (path.startsWith('/#')) return false;
        return pathname === path;
    };

    const linkClass = (path) => `hover:text-primary transition-colors ${isActive(path) ? 'text-primary font-bold' : ''}`;

    const mobileLinkClass = (path) => `block text-lg font-medium py-3 px-4 rounded-xl transition-colors ${isActive(path)
        ? 'text-primary bg-primary/10 font-bold'
        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/faq', label: 'FAQ' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm'
                    : 'bg-transparent border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="KMAX Logistics Logo" className="h-8 sm:h-10 w-auto rounded-lg shadow-sm" />
                        <span className="text-lg sm:text-xl font-display font-extrabold tracking-tight uppercase text-slate-800 dark:text-white">
                            KMAX Logistics
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                        {navLinks.map(link => (
                            <Link key={link.path} to={link.path} className={linkClass(link.path)}>{link.label}</Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link to="/contact" className="bg-primary hover:bg-rose-700 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-rose-500/20 active:scale-95 hidden sm:block text-sm">
                            Get Connected
                        </Link>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-900 shadow-2xl z-50 md:hidden flex flex-col"
                        >
                            {/* Menu Header */}
                            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
                                <span className="font-display font-bold text-slate-900 dark:text-white">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-5 h-5 text-slate-700 dark:text-white" />
                                </button>
                            </div>

                            {/* Menu Links */}
                            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link to={link.path} className={mobileLinkClass(link.path)}>
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Menu Footer CTA */}
                            <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                                <Link
                                    to="/contact"
                                    className="block w-full bg-primary hover:bg-rose-700 text-white text-center py-3 rounded-xl font-bold transition-colors shadow-lg shadow-rose-500/20"
                                >
                                    Get Connected
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
