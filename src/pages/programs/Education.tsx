import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../../assets/Education & Remedial Learning-20260228T182214Z-1-001/Education & Remedial Learning/IMG_1553.jpg";
import img2 from "../../assets/Education & Remedial Learning-20260228T182214Z-1-001/Education & Remedial Learning/IMG_1784.jpg";
import img3 from "../../assets/Education & Remedial Learning-20260228T182214Z-1-001/Education & Remedial Learning/WhatsApp Image 2026-02-07 at 10.22.20 (1).jpeg";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const educationInitiatives = [
    {
        title: "Remedial Classes",
        description: "Education is the cornerstone of empowerment. We provide extra help in core subjects to ensure students catch up and excel in their studies. Our Remedial Learning program is designed to bridge the gap by providing supplementary learning opportunities.",
        image: img1,
    },
    {
        title: "Basic Literacy & Numeracy",
        description: "Many children and youth face barriers to formal education in Kakuma. We teach foundational reading and numeracy to out-of-school youth, improving their daily lives and opening doors to further education.",
        image: img2,
    },
    {
        title: "Digital Literacy & Tech",
        description: "Equipping young minds with essential computer skills required in the modern world. Our digital literacy programs ensure youth have the technical foundation needed to access global opportunities.",
        image: img3,
    },
];

const EducationPage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-sunset-brown to-sunset-deep py-20 text-sunset-cream relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                <BookOpen className="w-8 h-8 text-sunset-gold" />
                            </div>
                            <h1 className="font-display text-4xl md:text-6xl font-bold">Education & Remedial Learning</h1>
                        </div>
                        <p className="text-xl text-sunset-cream/90 leading-relaxed">
                            Supporting children and out‑of‑school youth through essential learning programs to strengthen their foundation for the future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Initiatives Timeline/Cards */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-24">
                        {educationInitiatives.map((initiative, index) => (
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
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide">
                                            Program {index + 1}
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
                                        <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -z-10 transition-transform duration-500 group-hover:scale-105"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats/Quick Info (Optional but modern) */}
            <section className="py-16 bg-muted/50 border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: GraduationCap, title: "Remedial Help" },
                            { icon: Users, title: "Youth Community" },
                            { icon: Lightbulb, title: "Future Ready" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-4">
                                <div className="h-16 w-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
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
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Empower Through Education</h2>
                        <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                            Help us provide learning materials and support for our volunteer teachers. Every bit of support helps a youth continue their education.
                        </p>
                        <Link to="/get-involved" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            Volunteer With Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EducationPage;
