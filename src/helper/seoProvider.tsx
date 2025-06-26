import { Helmet } from "react-helmet-async";
import {
  COMPANY_NAME,
  COMPANY_URL,
  LOGO_FULL_URL,
  HOME_PAGE,
  SERVICES_PAGE,
  PROJECT_PAGE,
  ABOUT_PAGE,
  BRANDS_PAGE,
  CONTACT_PAGE,
  COMPANY_DESCRIPTION,
} from "../constants/seoConfig";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "../constants/path";
import { CONTACT_INFO } from "../constants/contact";

type CommonHelmetTagsProps = {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  twitterImage?: string;
  url: string;
};

const CommonHelmetTags = ({
  title,
  description,
  keywords,
  ogImage,
  twitterImage,
  url,
}: CommonHelmetTagsProps) => (
  <Helmet>
    {/* Basic Meta Tags */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={url} />
    {/* Open Graph / Facebook Meta Tags */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage ?? LOGO_FULL_URL} />
    <meta property="og:site_name" content={COMPANY_NAME} />
    {/* Twitter Meta Tags */}
    {/* <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={twitterImage || LOGO_FULL_URL} /> */}
    {/* Optional: <meta name="twitter:creator" content="@YourTwitterHandle" /> */}
    {/* Favicon (assuming you have a favicon.ico at root or specify it here) */}
    <link rel="icon" href="/logo.png" />{" "}
    {/* Adjust if your favicon path is different */}
    {/* Schema.org Markup for Organization (helps with rich snippets in search results) */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "${COMPANY_NAME}",
          "url": "${COMPANY_URL}",
          "logo": "${LOGO_FULL_URL}",
          "description": "${COMPANY_DESCRIPTION}",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": ${CONTACT_INFO.PHONE_NUMBER_1},
            "contactType": "customer service"
          },
          "sameAs": [
            ${CONTACT_INFO.PHONE_NUMBER_1},
            ${INSTAGRAM_LINK},
            ${FACEBOOK_LINK}
          ]
        }
      `}
    </script>
  </Helmet>
);

// Individual Page Helmet Components

export const HomePageHelmet = () => (
  <CommonHelmetTags
    title={HOME_PAGE.TITLE}
    description={HOME_PAGE.DESCRIPTION}
    keywords={HOME_PAGE.SEO_KEYWORDS}
    ogImage={HOME_PAGE.OG_IMAGE}
    twitterImage={HOME_PAGE.TWITTER_IMAGE}
    url={HOME_PAGE.URL}
  />
);

export const ServicesPageHelmet = () => (
  <CommonHelmetTags
    title={SERVICES_PAGE.TITLE}
    description={SERVICES_PAGE.DESCRIPTION}
    keywords={SERVICES_PAGE.SEO_KEYWORDS}
    ogImage={SERVICES_PAGE.OG_IMAGE}
    twitterImage={SERVICES_PAGE.TWITTER_IMAGE}
    url={SERVICES_PAGE.URL}
  />
);

export const PortfolioPageHelmet = () => (
  <CommonHelmetTags
    title={PROJECT_PAGE.TITLE}
    description={PROJECT_PAGE.DESCRIPTION}
    keywords={PROJECT_PAGE.SEO_KEYWORDS}
    ogImage={PROJECT_PAGE.OG_IMAGE}
    twitterImage={PROJECT_PAGE.TWITTER_IMAGE}
    url={PROJECT_PAGE.URL}
  />
);

export const AboutPageHelmet = () => (
  <CommonHelmetTags
    title={ABOUT_PAGE.TITLE}
    description={ABOUT_PAGE.DESCRIPTION}
    keywords={ABOUT_PAGE.SEO_KEYWORDS}
    ogImage={ABOUT_PAGE.OG_IMAGE}
    twitterImage={ABOUT_PAGE.TWITTER_IMAGE}
    url={ABOUT_PAGE.URL}
  />
);

export const BrandsPageHelmet = () => (
  <CommonHelmetTags
    title={BRANDS_PAGE.TITLE}
    description={BRANDS_PAGE.DESCRIPTION}
    keywords={BRANDS_PAGE.SEO_KEYWORDS}
    ogImage={BRANDS_PAGE.OG_IMAGE}
    twitterImage={BRANDS_PAGE.TWITTER_IMAGE}
    url={BRANDS_PAGE.URL}
  />
);

export const ContactPageHelmet = () => (
  <CommonHelmetTags
    title={CONTACT_PAGE.TITLE}
    description={CONTACT_PAGE.DESCRIPTION}
    keywords={CONTACT_PAGE.SEO_KEYWORDS}
    ogImage={CONTACT_PAGE.OG_IMAGE}
    twitterImage={CONTACT_PAGE.TWITTER_IMAGE}
    url={CONTACT_PAGE.URL}
  />
);

export const TestimonialsPageHelmet = () => (
  <CommonHelmetTags
    title={TESTIMONIALS_PAGE.TITLE}
    description={TESTIMONIALS_PAGE.DESCRIPTION}
    keywords={TESTIMONIALS_PAGE.SEO_KEYWORDS}
    ogImage={TESTIMONIALS_PAGE.OG_IMAGE}
    twitterImage={TESTIMONIALS_PAGE.TWITTER_IMAGE}
    url={TESTIMONIALS_PAGE.URL}
  />
);


