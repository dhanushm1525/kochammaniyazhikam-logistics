const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    <div className="p-10 bg-primary text-white flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <p className="mb-8 text-gray-300">
                            Ready to move your heavy equipment? Contact us for a quote or consultation.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-lg text-blue-300 mb-1">Visit Us</h3>
                                <p>3/326-4, Sendamaram Main Road,<br />Velayuthapuram</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-blue-300 mb-1">Call Us</h3>
                                <p className="text-xl">9547629047</p>
                                <p className="text-xl">7561088047</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-blue-300 mb-1">Email Us</h3>
                                <p>kochammaniyazhikamlogistics@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 flex items-center justify-center">
                        {/* Form placeholder */}
                        <form className="w-full space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent accent-white text-black bg-white" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent accent-white text-black bg-white" placeholder="Your Phone Number" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-primary focus:border-transparent accent-white text-black bg-white" placeholder="Tell us about your requirement"></textarea>
                            </div>
                            <button type="button" className="w-full bg-secondary hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

