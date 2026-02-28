import { motion } from "framer-motion";
import { Palette, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../../assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/486090211_659225156864049_1597289118659175792_n.jpg";
import img2 from "../../assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/486447709_662304796556085_3588053798550722721_n (1).jpg";
import img3 from "../../assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/486505971_662304529889445_1362330837765008160_n (1).jpg";
import img4 from "../../assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/487240216_662304766556088_7139121183215010831_n (1).jpg";
import img5 from "../../assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/487298989_662321413221090_6820652789194525194_n (2).jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
  {
    title: "Upcycling & Material Transformation",
    description: "We collect and recycle materials from the community and transform them into useful and artistic products such as pen holders and decorative items. This hands-on process not only reduces waste but turns everyday items into beautiful creations.",
    image: img1,
  },
  {
    title: "Design & Crafting Skills",
    description: "Youth are trained in various design and crafting techniques. By working directly with raw and recycled materials, they build a strong foundation in practical arts and discover their unique creative voices.",
    image: img2,
  },
  {
    title: "Economic Empowerment",
    description: "Through our program, creativity meets entrepreneurship. Participants gain the skills needed to market their upcycled products, generating sustainable income and fostering financial independence.",
    image: img3,
  },
  {
    title: "Community Exhibitions",
    description: "We organize exhibitions to showcase the incredible talents of the youth. These events bring the community together, foster a deep sense of pride, and inspire others to engage in creative practices.",
    image: img4,
  },
  {
    title: "Digital Art & Promotion",
    description: "In addition to traditional crafting, youth gain digital skills to document and promote their artwork. From basic photography to social media marketing, they learn how to share their stories with the world.",
    image: img5,
  }
];

const CreativeProjects = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sunset-brown to-sunset-deep py-20 text-sunset-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Palette className="w-8 h-8 text-sunset-gold" />
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold">Creative Projects</h1>
            </div>
            <p className="text-xl text-sunset-cream/90 leading-relaxed">
              Empowering youth through art, design, and upcycling. Transforming materials into beautiful products while building sustainable livelihoods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Timeline/Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {projects.map((project, index) => (
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
                      Initiative {index + 1}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {project.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 0 ? "order-1 md:order-2 relative" : "order-1 md:order-1 relative"}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                      {/* Gradient overlay for premium feel */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 transition-opacity group-hover:opacity-0"></div>
                      <img
                        src={project.image}
                        alt={project.title}
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

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-6">Support Our Creative Youth</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Your support helps us provide more materials, training, and opportunities for young artists in Kakuma.
            </p>
            <Link to="/donate" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              Contribute Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CreativeProjects;
