import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, BookOpen, Leaf, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";
import heroImg from "@/assets/hero.jpg";
import missionBg from "@/assets/mission-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
  { label: "Youth Engaged Annually", value: 100, suffix: "+" },
  { label: "Children Supported", value: 50, suffix: "+" },
  { label: "Recycled Products Created", value: 30, suffix: "+" },
  { label: "Stories Documented", value: 20, suffix: "+" },
];

const programs = [
  { icon: Palette, title: "Creative Projects", desc: "Transforming recycled materials into art and useful products.", to: "/programs#creative" },
  { icon: BookOpen, title: "Education & Learning", desc: "Remedial classes and digital literacy for out-of-school youth.", to: "/programs#education" },
  { icon: Leaf, title: "Environmental Initiatives", desc: "Clean-ups, recycling, and sustainability awareness.", to: "/programs#environment" },
  { icon: Camera, title: "Storytelling & Media", desc: "Amplifying refugee voices through photography, video, and writing.", to: "/programs#storytelling" },
];

const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-primary">
        {count}{suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36 text-sunset-cream">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-sunset-brown/85 via-sunset-deep/75 to-sunset-orange/60" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Youth Through Creativity, Education, and Community
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed max-w-2xl">
              Kakuma Made Creative is a youth‑led initiative in Kakuma Refugee Camp using creativity, education, and storytelling to build skills, promote peace, and create sustainable opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/donate">Support Our Work</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-sunset-cream/30 text-sunset-cream hover:bg-sunset-cream/10" asChild>
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kakuma Made Creative is a youth‑led community initiative based in Kakuma Refugee Camp, Kenya. We work with refugees and host‑community youth to unlock creativity, build skills, and create positive social impact through art, design, education, environmental action, and storytelling.
            </p>
            <Button variant="link" asChild className="text-primary">
              <Link to="/about">Read our full story <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Our Programs
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}>
                <Link to={p.to}>
                  <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer border-border">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="relative py-20 text-primary-foreground overflow-hidden">
        <img src={missionBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-sunset-deep/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
            <p className="max-w-xl mx-auto mb-8 opacity-90">
              Your donation helps us buy creative materials, support youth‑led projects, run peacebuilding activities, and expand education programs.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
