import { useState } from 'react';
import faqData from '../data/faqData.json';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ number, question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="border-b border-slate-100 dark:border-slate-800 pb-8 hover:bg-slate-50 dark:hover:bg-slate-800/20 px-4 rounded-xl transition-colors group cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-start gap-6 pt-6">
                <span className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'}`}>
                    {number}
                </span>
                <div className="w-full">
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors pt-2 uppercase text-slate-900 dark:text-white flex justify-between items-center">
                        {question}
                        <span className="material-symbols-outlined text-sm">{isOpen ? 'remove' : 'add'}</span>
                    </h4>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="text-slate-500 text-sm leading-relaxed mt-4 overflow-hidden"
                            >
                                {answer}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};


const FAQ = () => {
    // Flatten the first few questions or select specific ones for the homepage teaser
    const faqs = faqData.flatMap(cat => cat.questions).slice(0, 4);

    return (
        <section id="faq" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
                    <div className="max-w-md">
                        <span className="text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-4 block">// FAQ //</span>
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight text-slate-900 dark:text-white">FREQUENTLY ASKED QUESTIONS</h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm mt-auto">
                        Handpicked expertise, seamless booking, and local insights—everything you need to move your heavy equipment with KMAX Logistics.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} number={i + 1} question={faq.q} answer={faq.a} />
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="mt-24 relative rounded-3xl overflow-hidden min-h-[400px] flex items-center p-8 md:p-16">
                    <img
                        alt="Truck fleet"
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkMi_BB90x7UnH_SNlkHTZXcMzUxDalvYv4txIoMQBmhw-LfiX2veYrseduucVMegJ8xCR2sqtQHtmYpgfI5o2Q-wrggThcjbCtk71uKc-KQ7Dw2xdNeIm7MjDsFZsubIThp5CHUeb1stDEXBKn0ocbvcYNNCQm-YJbxOC8nGMlFbdOTAuSnPXc_KSJVXHi0n5u8MFtazp7i0EZJjSTMi_E8mD5Ay4PvkRpWsXKEepO-KchiU9nt7hXdoGVBGnyLaY-zfcopBhdx0"
                    />
                    <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 uppercase">READY TO MOVE WITH KMAX LOGISTICS?</h2>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            From planning to delivery, our logistics experts are here to simplify your supply chain and keep your business moving at the speed of progress.
                        </p>
                        <button className="bg-primary hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all active:scale-95 group shadow-lg shadow-primary/25">
                            Let's Collaborate
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
