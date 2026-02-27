import { motion } from "framer-motion";
import { Lightbulb, Heart, Users, Leaf, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  { icon: Lightbulb, title: "Creativity & Innovation", desc: "Turning ideas and waste into opportunity." },
  { icon: Heart, title: "Peace & Inclusion", desc: "Building bridges across diverse communities." },
  { icon: Users, title: "Youth Leadership", desc: "Empowering young people to lead change." },
  { icon: Leaf, title: "Sustainability", desc: "Caring for our environment and future." },
  { icon: Handshake, title: "Community Collaboration", desc: "Working together for shared impact." },
];

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-sunset-brown to-sunset-deep py-20 text-sunset-cream">
        <div className="container mx-auto px-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold">
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kakuma Made Creative is a youth‑led community initiative based in Kakuma Refugee Camp, Kenya. We work with refugees and host‑community youth to unlock creativity, build skills, and create positive social impact. Through art, design, education, environmental action, and storytelling, we provide young people with opportunities to express themselves, learn, and contribute meaningfully to their community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kakuma Made Creative was founded by William Amanya after recognizing the high levels of youth unemployment and untapped talent within the camp. Inspired by the abundance of creative potential and recyclable materials in the community, the initiative was created to transform challenges into opportunities for learning, income generation, and peacebuilding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full border-primary/20">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold mb-4 text-primary">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower youth and children in Kakuma Refugee Camp through creativity, education, environmental stewardship, and storytelling, creating opportunities for self‑expression, learning, and sustainable community development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.15 } } }}>
              <Card className="h-full border-secondary/20">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold mb-4 text-secondary">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A community where every young person has the skills, confidence, and platform to express themselves, solve challenges, and contribute positively to society.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="our-values" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-display text-3xl font-bold text-center mb-12">
            Our Values
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}>
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <v.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-sm font-semibold mb-1">{v.title}</h3>
                    <p className="text-xs text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
