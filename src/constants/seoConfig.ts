export const COMPANY_NAME = "Agrawal Ply Decor";
export const COMPANY_URL = "https://agrawalplydecor.com/";

// Common Variables
export const LOGO_RELATIVE_PATH = "/logo.png";
export const LOGO_FULL_URL = `${COMPANY_URL}${LOGO_RELATIVE_PATH}`;

export const COMPANY_DESCRIPTION =
  "Agrawal Ply Decor offers comprehensive turnkey interior solutions and supplies high-quality raw materials for residential and commercial projects in Pune, Maharashtra. We transform spaces with innovative designs and premium products.";

// --- SEO Keywords ---
export const COMMON_SEO_KEYWORDS = [
  "interior designer pune",
  "interior designer near me",
  "best interior designers in pune",
  "good interior designers in pune",
  "interior designer near by me",
  "home interior designer near me",
  "interior design firms near me",
  "new home interior design",
  "top interior designers in pune",
  "residential interior designers in pune",
  "plywood near me",
  "plywood shop near me",
  "plywood dealer near me",
  "plywood suppliers near me",
  "plywood supplier",
  "wholesale plywood shop near me",
  "turnkey interior solutions pune",
  "raw material supplier pune",
  "commercial interior designer pune",
  "office interior designer pune",
  "custom furniture pune",
  "space planning pune",
  "home renovation pune",
  "modular kitchen pune",
  "wardrobe design pune",
  "interior contractor pune",
  "building materials pune",
  "laminate supplier pune",
  "veneer supplier pune",
  "hardware shop pune",
  "flooring solutions pune",
];
export const COMMON_SEO_KEYWORDS_STRING = COMMON_SEO_KEYWORDS.join(", ");

export const SERVICES_SEO_KEYWORDS =
  "interior design services Pune, residential interior designers, commercial interior design, turnkey interior solutions, luxury home interiors, office interior design, interior decorators Maharashtra, home renovation Pune, space planning, furniture design, custom interiors Pune, modular solutions Pune, complete interior solutions";

export const PORTFOLIO_SEO_KEYWORDS =
  "interior design projects Pune, residential interior design portfolio, commercial interior design projects, luxury home interiors portfolio, office design projects Pune, interior decorators Maharashtra portfolio, project portfolio, modern interiors Pune, completed projects, interior design gallery";

export const ABOUT_SEO_KEYWORDS =
  "about Agrawal Ply Decor, interior design company Pune, best interior designers, raw material suppliers Pune, interior design philosophy, interior design team, company profile Pune, interior design values, why choose Agrawal Ply Decor";

export const BRANDS_SEO_KEYWORDS =
  "plywood brands Pune, laminate brands Pune, hardware brands Pune, interior material brands, trusted suppliers Pune, quality raw materials, top interior brands, building material brands, branded plywood, branded laminates";

export const CONTACT_SEO_KEYWORDS =
  "contact Agrawal Ply Decor, interior designer contact Pune, raw material supplier contact Pune, interior design inquiry, get a quote, book consultation, Pune interior designer address, contact number, email";

export const TESTIMONIALS_SEO_KEYWORDS =
  "client testimonials, customer reviews Pune, interior design reviews, Agrawal Ply Decor reviews, satisfied clients, interior designer feedback, best interior designers Pune reviews, success stories, client satisfaction";

// Home Page
export const HOME_PAGE = {
  URL: COMPANY_URL,
  TITLE: `${COMPANY_NAME} | Turnkey Interior Solutions & High-Quality Raw Materials in Pune`,
  DESCRIPTION: `Transform your space with ${COMPANY_NAME}. We provide complete turnkey interior design solutions and supply high-quality plywood, laminates, and other raw materials in Pune, Maharashtra. Your trusted partner for innovative interiors.`,
  SEO_KEYWORDS: COMMON_SEO_KEYWORDS_STRING, // Using common keywords for home page
  OG_IMAGE: `${COMPANY_URL}/images/favicon.png`, // Generic home page OG image
  TWITTER_IMAGE: `${COMPANY_URL}/images/home-twitter.jpg`, // Generic home page Twitter image
};

// Services Page
export const SERVICES_PAGE = {
  URL: `${COMPANY_URL}/services`,
  TITLE: `Interior Design Services in Pune | ${COMPANY_NAME}`,
  DESCRIPTION: `Explore comprehensive interior design services by ${COMPANY_NAME} in Pune, Maharashtra. We offer residential, commercial, and turnkey solutions, specializing in bespoke furniture, space planning, office design, and full project management to transform your space.`,
  SEO_KEYWORDS: SERVICES_SEO_KEYWORDS,
  OG_IMAGE: `${COMPANY_URL}/images/services-og.jpg`, // Image specific to services page
  TWITTER_IMAGE: `${COMPANY_URL}/images/services-twitter.jpg`, // Image specific to services page
};

// Portfolio/Projects Page (using PROJECT_PAGE as originally named, but matching 'portfolio' URL)
export const PROJECT_PAGE = {
  URL: `${COMPANY_URL}/portfolio`, // Renamed URL to match 'portfolio' page
  TITLE: `Interior Design Projects Portfolio | ${COMPANY_NAME}`,
  DESCRIPTION: `Discover stunning interior design projects by ${COMPANY_NAME} in Pune, Maharashtra. From luxury homes to modern offices, explore our portfolio showcasing innovative designs and exceptional craftsmanship.`,
  SEO_KEYWORDS: PORTFOLIO_SEO_KEYWORDS,
  OG_IMAGE: `${COMPANY_URL}/images/projects-og.jpg`,
  TWITTER_IMAGE: `${COMPANY_URL}/images/projects-twitter.jpg`,
};

// About Page
export const ABOUT_PAGE = {
  URL: `${COMPANY_URL}/about`,
  TITLE: `About ${COMPANY_NAME} | Best Interior Designers & Raw Material Suppliers`,
  DESCRIPTION: `Learn more about ${COMPANY_NAME}, a leading provider of turnkey interior solutions and high-quality raw materials in Pune. Discover our mission, values, and commitment to delivering exceptional design and products.`,
  SEO_KEYWORDS: ABOUT_SEO_KEYWORDS,
  OG_IMAGE: `${COMPANY_URL}/images/about-og.jpg`,
  TWITTER_IMAGE: `${COMPANY_URL}/images/about-twitter.jpg`,
};

// Brands Page
export const BRANDS_PAGE = {
  URL: `${COMPANY_URL}/brands`,
  TITLE: `Our Partner Brands | High-Quality Interior Materials | ${COMPANY_NAME}`,
  DESCRIPTION: `Explore the trusted brands partnered with ${COMPANY_NAME} for high-quality plywood, laminates, hardware, and other interior raw materials. We source the best products for your projects in Pune.`,
  SEO_KEYWORDS: BRANDS_SEO_KEYWORDS,
  OG_IMAGE: `${COMPANY_URL}/images/brands-og.jpg`,
  TWITTER_IMAGE: `${COMPANY_URL}/images/brands-twitter.jpg`,
};

// Contact Page
export const CONTACT_PAGE = {
  URL: `${COMPANY_URL}/contact`,
  TITLE: `Contact ${COMPANY_NAME} | Interior Designers & Raw Material Suppliers Pune`,
  DESCRIPTION: `Get in touch with ${COMPANY_NAME} for your interior design needs or raw material inquiries in Pune, Maharashtra. Contact us for consultations, quotes, or any questions regarding our services and products.`,
  SEO_KEYWORDS: CONTACT_SEO_KEYWORDS,
  OG_IMAGE: `${COMPANY_URL}/images/contact-og.jpg`,
  TWITTER_IMAGE: `${COMPANY_URL}/images/contact-twitter.jpg`,
};

export const TESTIMONIALS_PAGE = {
  URL: `${COMPANY_URL}/testimonials`,
  TITLE: `Client Testimonials & Reviews | ${COMPANY_NAME} Pune`,
  DESCRIPTION: `Read what our satisfied clients say about ${COMPANY_NAME}'s interior design services and raw material supplies in Pune, Maharashtra. Discover our commitment to excellence through their experiences.`,
  SEO_KEYWORDS: TESTIMONIALS_SEO_KEYWORDS,
  OG_IMAGE: `${COMPANY_URL}/images/testimonials-og.jpg`, // Create a specific image for testimonials
  TWITTER_IMAGE: `${COMPANY_URL}/images/testimonials-twitter.jpg`, // Create a specific image for testimonials
};
