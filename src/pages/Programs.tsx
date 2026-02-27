import { motion } from "framer-motion";
import { Palette, BookOpen, Leaf, Camera } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sections = [
  {
    id: "creative",
    icon: Palette,
    title: "Creative Projects",
    desc: "We collect and recycle materials from the community and train youth to transform them into useful and artistic products such as pen holders and decorative items. Youth gain design, art, and digital skills while generating income.",
  },
  {
    id: "education",
    icon: BookOpen,
    title: "Education & Remedial Learning",
    desc: "We support children and out‑of‑school youth through remedial classes, basic literacy, numeracy, and digital literacy programs to strengthen their learning foundation.",
  },
  {
    id: "environment",
    icon: Leaf,
    title: "Environmental Initiatives",
    desc: "We promote environmental awareness through community clean‑ups, recycling, and upcycling activities that reduce waste and encourage sustainable practices.",
  },
  {
    id: "storytelling",
    icon: Camera,
    title: "Storytelling & Media",
    desc: "We document and share authentic stories of youth and community life through photography, video, and written narratives to amplify refugee voices and inspire change.",
  },
];

const Programs = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-sunset-brown to-sunset-deep py-20 text-sunset-cream">
        <div className="container mx-auto px-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold">
            Our Programs
          </motion.h1>
        </div>
      </section>

      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className={i % 2 === 1 ? "py-16 bg-muted/50" : "py-16"}>
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto grid gap-8 md:grid-cols-[1fr_2fr] items-center">
              <div className="flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-12 w-12" />
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Programs;
