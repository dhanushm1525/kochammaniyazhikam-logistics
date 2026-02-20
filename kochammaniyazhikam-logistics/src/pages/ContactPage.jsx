
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2 } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '9d0f22c7-ee33-4d19-a45b-74b2499c9dc5',
                    subject: 'New Contact Form Submission - Kochammaniyazhikam Logistics',
                    from_name: formData.name,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    // Placeholder for WhatsApp Link - to be updated by user
    const whatsappLink = "https://wa.me/919547629047";

    return (
        <div className="pt-20 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
            <SEO
                title="Contact Us"
                description="Get in touch with Kochammaniyazhikam Logistics for quotes, inquiries, and heavy transport solutions. Contact via email or WhatsApp."
                keywords="contact logistics, heavy haulage quote, transport inquiry, whatsapp logistics, customer support"
                url="/contact"
            />

            {/* Header */}
            <section className="relative h-[40vh] min-h-[300px] bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                    alt="Global Connectivity"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    src="C:/Users/dhanu/.gemini/antigravity/brain/cd3c4b04-1e47-40cc-8786-dee9b817b0d2/contact_page_hero_1769414834347.png"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/90"></div>
                <div className="relative z-10 text-center px-4">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-display font-extrabold text-white uppercase"
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </section>

            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info & WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
                            Let's Discuss Your <span className="text-primary">Logistics Needs</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-10 text-lg leading-relaxed">
                            Have an oversized shipment? Need a quote for a heavy lift project? Our team is ready to assist you.
                            Connect with us via the form or use WhatsApp for instant communication.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                <Phone className="text-primary mb-4 w-8 h-8" />
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Call Us</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Mon-Sat from 9am to 6pm</p>
                                <p className="text-slate-800 dark:text-slate-200 font-bold mt-2">9547629047</p>
                                <p className="text-slate-800 dark:text-slate-200 font-bold">7561088047</p>
                            </div>
                            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                <Mail className="text-primary mb-4 w-8 h-8" />
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Email Us</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">For inquiries & support</p>
                                <p className="text-slate-800 dark:text-slate-200 font-bold mt-2 break-all">hello@kmaxlogistics.com</p>
                            </div>
                            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm md:col-span-2">
                                <MapPin className="text-primary mb-4 w-8 h-8" />
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Visit Us</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">Headquarters</p>
                                <p className="text-slate-800 dark:text-slate-200 font-medium">
                                    3/326-4, Sendamaram Main Road, Velayuthapuram, India
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp Button */}
                        <a
                            href={whatsappLink}

                            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white p-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                        >
                            <MessageSquare className="w-6 h-6 fill-current" />
                            <span className="text-lg">Chat on WhatsApp</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_outward</span>
                        </a>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-rose-900/10 border border-slate-100 dark:border-slate-700 relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[2.5rem] rounded-tr-[2.5rem] -z-0"></div>

                        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white relative z-10">Send us a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all"
                                        placeholder="+91..."
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-primary hover:bg-rose-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-rose-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 font-bold text-center bg-green-50 dark:bg-green-900/20 py-2 rounded-lg">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 font-bold text-center bg-red-50 dark:bg-red-900/20 py-2 rounded-lg">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
