import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqData from '../data/faqData.json';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div
            className="border-b border-slate-200 dark:border-slate-800 last:border-0"
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
            >
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                    {question}
                </span>
                <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <span className="material-symbols-outlined text-sm font-bold">
                        {isOpen ? 'remove' : 'add'}
                    </span>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState("0-0"); // Default open first item of first category

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block"
                    >
                        Help Center
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-extrabold mb-6"
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Find answers to common questions about our logistics services, tracking, specific handling capabilities, and more.
                    </motion.p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="space-y-16">
                    {faqData.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                {category.category}
                            </h2>
                            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                                {category.questions.map((faq, index) => {
                                    const uniqueIndex = `${catIndex}-${index}`;
                                    return (
                                        <FAQItem
                                            key={index}
                                            question={faq.q}
                                            answer={faq.a}
                                            isOpen={openIndex === uniqueIndex}
                                            onClick={() => toggleFAQ(uniqueIndex)}
                                        />
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Support CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold font-display mb-4">Still have questions?</h3>
                        <p className="text-primary-50 mb-8 max-w-xl mx-auto">
                            Can't find the answer you're looking for? Our team is here to help you with specialized queries.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors"
                        >
                            Contact Support
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQPage;
