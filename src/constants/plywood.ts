import { sub } from "framer-motion/client";
import {
    Box,
    Settings,
    Ruler,
    Hammer,
    Droplets,
    TreePine,
    Layers,
    Shield,
    Award,
    Zap,
    Wrench,
    CheckCircle,
    ShieldCheck,
    Leaf,
} from "lucide-react";

export const PLYWOOD_SERVICES = [
    {
        title: "Yeti Pride",
        subtitle: "Premium Calibrated Plywood for Superior Strength and Durability",
        description:
            "Yeti Pride plywood combines strength, precision, and durability, crafted from sustainable eucalyptus hardwood and bonded with advanced resins. Meeting ISI standards for moisture and waterproof resistance, it features uniform thickness and a smooth finish—perfect for furniture, modular kitchens, and heavy-duty construction.",
        features: [
            { icon: Ruler, text: "Uniform thickness for precision work" },
            { icon: Hammer, text: "Heavy-duty shuttering plywood for robust construction" },
            { icon: Droplets, text: "Waterproof and Boiling Water Proof (BWP) options available" },
            { icon: TreePine, text: "Premium high-density eucalyptus hardwood construction" },
            { icon: Layers, text: "Custom block boards & flush doors for versatile applications" },
            { icon: ShieldCheck, text: "Multi-stage quality checks ensure lasting reliability" },
            { icon: Award, text: "ISI certified standards for guaranteed performance" },
            { icon: Leaf, text: "Eco-friendly and sustainably sourced timber" }
        ],

        image: "/plywood/pride.JPG",
    },
    {
        title: "Yeti Arniko",
        subtitle: "Durable, Eco-Friendly Plywood Engineered for Versatile Furniture Solutions",
        description:
            "Yeti Arniko plywood combines affordability with quality, crafted from premium eucalyptus hardwood and popular soft Indian timber. Bonded with advanced MUF and Phenolic resins, it meets ISI standards for MR, BWR, and BWP grades. Treated with vacuum pressure technology and glue-line preservatives, it’s borer-proof, eco-friendly, and ideal for all types of furniture and interiors.",
        features: [
            { icon: TreePine, text: "Made from high-quality eucalyptus & popular Indian timber" },
            { icon: Droplets, text: "Available in MR, BWR, and BWP grades for moisture resistance" },
            { icon: Award, text: "ISI certified: IS:303 & IS:710 standards" },
            { icon: ShieldCheck, text: "Borer-proof with vacuum pressure treatment" },
            { icon: Leaf, text: "Eco-conscious, using local, sustainable species" },
            { icon: CheckCircle, text: "Affordable and versatile for all furniture needs" }
        ],
        image: "/plywood/arniko.JPG"
    },
    {
        title: "Yeti Champ",
        subtitle: "Economical, Durable, and Eco-Friendly Plywood for Versatile Applications",
        description:
            "Yeti Champ plywood offers reliable quality at an affordable price, crafted from premium eucalyptus and popular Indian timber. Available in MR and BWR grades, it’s bonded with MUF resin and manufactured to IS:303 standards. Treated with vacuum pressure technology and glue-line preservatives, Yeti Champ is borer-proof, eco-friendly, and ideal for a wide range of furniture and interior projects.",
        features: [
            { icon: Ruler, text: "Consistent thickness with short core veneer construction" },
            { icon: Droplets, text: "Moisture and boiling water resistant options (MR & BWR)" },
            { icon: Award, text: "ISI:303 certified for quality assurance" },
            { icon: ShieldCheck, text: "Borer-proof with advanced vacuum pressure treatment" },
            { icon: Leaf, text: "Eco-friendly, made from locally sourced Indian timber" },
            { icon: CheckCircle, text: "Economical and versatile for all furniture needs" }
        ],
        image: "/plywood/champ.JPG"
    },

    //   {
    //     title: "Fire-Retardant Plywood",
    //     description:
    //       "Enhance safety with fire-retardant plywood, specially treated to resist flames and reduce smoke emission. Perfect for commercial, residential, and public spaces.",
    //     features: [
    //       { icon: Shield, text: "Fire-resistant core" },
    //       { icon: Droplets, text: "Low smoke emission" },
    //       { icon: Award, text: "Meets safety standards" },
    //       { icon: Hammer, text: "Durable build" },
    //       { icon: Layers, text: "Ideal for public spaces" },
    //       { icon: CheckCircle, text: "Certified protection" },
    //     ],
    //     image: "/services/fire-ply.jpg",
    //   },
    //   {
    //     title: "Decorative Laminated Plywood",
    //     description:
    //       "Upgrade interiors with our decorative laminated plywood. Available in a variety of textures and finishes, it’s perfect for stylish furniture, wall panels, and cabinetry.",
    //     features: [
    //       { icon: Layers, text: "Wide range of finishes" },
    //       { icon: Shield, text: "Scratch-resistant" },
    //       { icon: CheckCircle, text: "Easy to clean" },
    //       { icon: Zap, text: "Vibrant colors" },
    //       { icon: TreePine, text: "Ideal for interiors" },
    //       { icon: Settings, text: "Custom designs" },
    //     ],
    //     image: "/services/decor-ply.jpg",
    //   },
];