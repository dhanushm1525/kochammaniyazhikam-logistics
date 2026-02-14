import Services from '../components/Services';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ServicesPage = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Our Services"
                description="Explore our wide range of logistics services including Heavy Machinery Transportation, ODC Transportation, Crane Services, and more across India."
                keywords="services, heavy lift, machinery transport, crane rental, trailer hiring, logistics solutions"
                url="/services"
            />
            <Services />
            <Footer />
        </div>
    );
};

export default ServicesPage;
