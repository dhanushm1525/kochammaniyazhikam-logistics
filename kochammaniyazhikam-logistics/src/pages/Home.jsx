'use server'

import Hero from '../components/Hero';

import About from '../components/About';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import SEO from '../components/SEO';


const Home = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Kochammaniyazhikam Logistics - Trusted provider of heavy equipment transport and industrial logistics solutions across India. Safe, efficient, and on-time delivery."
                keywords="heavy machinery transport, industrial logistics, ODC transportation, crane services, trailer transport, India logistics"
            />

            <Hero />

            <About />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;
