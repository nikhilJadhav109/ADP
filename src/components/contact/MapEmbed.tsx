import { LOCATION } from "../../constants/path";

const MapEmbed = () => (
  <section className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ minHeight: "400px" }}>
        <iframe
          src={LOCATION}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  </section>
);

export default MapEmbed;
