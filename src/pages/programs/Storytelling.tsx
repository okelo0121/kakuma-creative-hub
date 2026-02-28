import { motion } from "framer-motion";
import { Camera, Video, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../../assets/Storytelling & Media-20260228T182229Z-1-001/Storytelling & Media/WhatsApp Image 2026-02-07 at 11.10.32.jpeg";
import img2 from "../../assets/Storytelling & Media-20260228T182229Z-1-001/Storytelling & Media/WhatsApp Image 2026-02-07 at 11.11.02.jpeg";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const storyInitiatives = [
    {
        title: "Video Production & Editing",
        description: "Training in basic videography and editing to create short documentaries and community news. We equip youth with the tools to tell dynamic visual stories that challenge stereotypes and amplify authentic refugee voices.",
        image: img1,
    },
    {
        title: "Photography & Visual Arts",
        description: "Using the lens to capture daily life, struggles, and triumphs. Through photography, we teach visual storytelling, enabling participants to document their realities and share their perspectives with the world.",
        image: img2,
    },
];

const StorytellingPage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-900 to-purple-900 py-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                <Camera className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="font-display text-4xl md:text-6xl font-bold">Storytelling & Media</h1>
                        </div>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Documenting and sharing authentic stories of youth and community life to amplify refugee voices and inspire change.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Initiatives Timeline/Cards */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    {/* Intro Text */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-24 text-center">
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Everyone has a story worth telling. Our Storytelling & Media program provides a platform for the youth in Kakuma to express themselves, document their realities, and shape their narratives.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto space-y-24">
                        {storyInitiatives.map((initiative, index) => (
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
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium text-sm tracking-wide">
                                            Program Area {index + 1}
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
                                        <div className="absolute -inset-4 bg-purple-500/10 rounded-[2.5rem] -z-10 transition-transform duration-500 group-hover:scale-105"></div>
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
                            { icon: Video, title: "Video Prod" },
                            { icon: Camera, title: "Photography" },
                            { icon: PenTool, title: "Written Media" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-4">
                                <div className="h-16 w-16 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center">
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
                    <div className="bg-purple-50 dark:bg-purple-900/10 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto border border-purple-100 dark:border-purple-900/20">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Support Our Media Team</h2>
                        <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                            Help us acquire better cameras, laptops, and recording equipment so we can continue to tell our stories right.
                        </p>
                        <Link to="/donate" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">
                            Donate Equipment / Funds
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StorytellingPage;
