
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = 'Kochammaniyazhikam Logistics';
    const siteUrl = 'https://kmaxlogistics.com'; // Replace with actual URL if known, or placeholders
    const defaultImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPiV3pwKfK13PqGsNP-pUrHhz_5YFLec-y_HyxRqjlVozE0TJp5eXdTkDbWONQIJu5s4xfKnGydqa3Wc-84_Kg9hgBtTgvshQ2xvfRXSI5M6ZhMxkciUFoh10WQqaZDWh1fuGgaoFQHpJhQHVA1b_A3DmqLyKDcMXg14UfCYRFaV_8TNdtqWPEYQyqE2y949ainHL9QXbs2pehZNdAHoHd9jNJ3jGZJGCpUfBS4CAjKmDIaXclddxyliw2HXXGTvzHkfhvsqDfllI';

    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const metaImage = image || defaultImage;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
