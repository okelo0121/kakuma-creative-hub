import { motion } from "framer-motion";
import { Leaf, Recycle, TreePine, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../../assets/Environmental Initiatives-20260228T182222Z-1-001/Environmental Initiatives/IMG_1801.jpg";
import img2 from "../../assets/Environmental Initiatives-20260228T182222Z-1-001/Environmental Initiatives/IMG_1804.jpg";
import img3 from "../../assets/Environmental Initiatives-20260228T182222Z-1-001/Environmental Initiatives/IMG_1810.jpg";
import img4 from "../../assets/Environmental Initiatives-20260228T182222Z-1-001/Environmental Initiatives/IMG_1811.jpg";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const environmentInitiatives = [
    {
        title: "Waste Reduction",
        description: "A clean and sustainable environment is vital for community well-being. We organize community recycling drives and teach upcycling techniques to reduce landfill waste. Our focus is on practical action that improves our immediate surroundings.",
        image: img1,
    },
    {
        title: "Youth Action",
        description: "Engaging young people in environmental clean-ups and campaigns around Kakuma. We empower the next generation to take ownership of their community spaces and advocate for sustainable living.",
        image: img2,
    },
    {
        title: "Sustainability Education",
        description: "Running workshops on water conservation, sanitation, and sustainable practices. We educate the community on the long-term importance of sustainability and how small daily actions create large impacts.",
        image: img3,
    },
    {
        title: "Tree Planting",
        description: "As part of our mission to combat deforestation and climate change, we regularly host tree planting events. Green spaces build healthier, more resilient communities that thrive together.",
        image: img4,
    }
];

const EnvironmentPage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-agave-light to-earth-dark py-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                <Leaf className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="font-display text-4xl md:text-6xl font-bold">Environmental Initiatives</h1>
                        </div>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Promoting environmental awareness through community action, recycling, and sustainable practices.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Initiatives Timeline/Cards */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-24">
                        {environmentInitiatives.map((initiative, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeUp}
                                className="group"
                            >
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    {/* Text Details */}
                                    <div className={index % 2 === 0 ? "order-2 md:order-1 space-y-6" : "order-2 md:order-2 space-y-6"}>
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-agave-DEFAULT/10 text-agave-DEFAULT font-medium text-sm tracking-wide">
                                            Initiative {index + 1}
                                        </div>
                                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                                            {initiative.title}
                                        </h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {initiative.description}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div className={index % 2 === 0 ? "order-1 md:order-2 relative" : "order-1 md:order-1 relative"}>
                                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                                            {/* Gradient overlay for premium feel */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 transition-opacity group-hover:opacity-0"></div>
                                            <img
                                                src={initiative.image}
                                                alt={initiative.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        {/* Decorative element */}
                                        <div className="absolute -inset-4 bg-agave-DEFAULT/10 rounded-[2.5rem] -z-10 transition-transform duration-500 group-hover:scale-105"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats/Quick Info */}
            <section className="py-16 bg-muted/50 border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: Recycle, title: "Waste Reduced" },
                            { icon: TreePine, title: "Trees Planted" },
                            { icon: Droplets, title: "Water Conserved" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-4">
                                <div className="h-16 w-16 bg-agave-DEFAULT/10 text-agave-DEFAULT rounded-2xl flex items-center justify-center">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-agave-DEFAULT/10 to-transparent rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto border border-agave-DEFAULT/20">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Join Our Next Clean-up</h2>
                        <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                            Be part of the change. Join our community of environmentally conscious youth taking practical action today.
                        </p>
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-agave-DEFAULT text-white font-semibold hover:bg-agave-dark transition-colors shadow-lg shadow-agave-DEFAULT/20">
                            Contact Us To Join
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnvironmentPage;
