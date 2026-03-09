import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { Heart, Users, Sprout, BookOpen } from "lucide-react";

// Photos from existing assets
import creative1 from "@/assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/486090211_659225156864049_1597289118659175792_n.jpg";
import creative2 from "@/assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/486447709_662304796556085_3588053798550722721_n (1).jpg";
import creative3 from "@/assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/486505971_662304529889445_1362330837765008160_n (1).jpg";
import education1 from "@/assets/Education & Remedial Learning-20260228T182214Z-1-001/Education & Remedial Learning/IMG_1784.jpg";
import education2 from "@/assets/Education & Remedial Learning-20260228T182214Z-1-001/Education & Remedial Learning/IMG_1553.jpg";
import education3 from "@/assets/Education & Remedial Learning-20260228T182214Z-1-001/Education & Remedial Learning/WhatsApp Image 2026-02-07 at 10.22.20 (1).jpeg";
import environment1 from "@/assets/Environmental Initiatives-20260228T182222Z-1-001/Environmental Initiatives/IMG_1801.jpg";
import environment2 from "@/assets/Environmental Initiatives-20260228T182222Z-1-001/Environmental Initiatives/IMG_1804.jpg";
import peace1 from "@/assets/Peace Bulding-20260228T182226Z-1-001/Peace Bulding/IMG_0477.JPG";
import peace2 from "@/assets/Peace Bulding-20260228T182226Z-1-001/Peace Bulding/IMG_0496.JPG";
import storytelling1 from "@/assets/Storytelling & Media-20260228T182229Z-1-001/Storytelling & Media/WhatsApp Image 2026-02-07 at 11.10.32.jpeg";
import storytelling2 from "@/assets/Storytelling & Media-20260228T182229Z-1-001/Storytelling & Media/WhatsApp Image 2026-02-07 at 11.11.02.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const stats = [
  { label: "Youth engaged annually in creative and environmental projects", value: 400, suffix: "+", icon: Users },
  { label: "Children supported through remedial education", value: 250, suffix: "+", icon: BookOpen },
  { label: "Recycled and upcycled products created", value: 300, suffix: "+", icon: Sprout },
  { label: "Community stories documented and shared", value: 150, suffix: "+", icon: Heart },
];

const successStories = [
  {
    quote: "Kakuma Made Creative gave me a chance to discover my talent in art and earn from it. I never thought my creativity could become something meaningful.",
    name: "Amina K.",
    role: "Youth Artist, Creative Projects",
    image: creative1,
  },
  {
    quote: "The remedial classes helped my child catch up in school after years of missed education. I am so grateful for the teachers who volunteer their time.",
    name: "Sarah M.",
    role: "Community Parent",
    image: education1,
  },
  {
    quote: "Through the storytelling program, I learned to share my community's stories with the world. Our voices matter, and now people listen.",
    name: "David O.",
    role: "Youth Storyteller",
    image: storytelling1,
  },
  {
    quote: "Planting trees and creating recycled products taught me that we can protect our environment while building a livelihood. It changed my perspective.",
    name: "Grace N.",
    role: "Environmental Initiative Participant",
    image: environment1,
  },
];

const photoGallery = [
  { src: creative2, alt: "Youth creative art project" },
  { src: education2, alt: "Remedial education class" },
  { src: environment2, alt: "Environmental tree planting" },
  { src: peace1, alt: "Peace building community event" },
  { src: creative3, alt: "Creative workshop session" },
  { src: peace2, alt: "Community peace dialogue" },
  { src: storytelling2, alt: "Media storytelling session" },
  { src: education3, alt: "Children in learning program" },
];

const StatCard = ({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: React.ElementType }) => {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div ref={ref} variants={fadeUp} className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
      <div className="font-display text-5xl md:text-6xl font-bold text-primary mb-3">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </motion.div>
  );
};

const Impact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sunset-brown to-sunset-deep py-20 text-sunset-cream overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Impact
            </motion.h1>
            <motion.p variants={fadeUp} className="text-sunset-cream/80 text-lg md:text-xl max-w-2xl">
              Real change, measured in lives transformed. See how our programs are making a difference in Kakuma and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
          >
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Impact in Action</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Moments captured across our programs — creativity, learning, environment, and peace.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto"
          >
            {photoGallery.map((photo, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`overflow-hidden rounded-xl ${i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Stories of Change</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every young person we work with carries a story of resilience and creativity.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto"
          >
            {successStories.map((story, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-5 rounded-2xl bg-card border border-border p-5 hover:shadow-lg transition-shadow"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-xl flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-muted-foreground italic mb-3 leading-relaxed">
                    "{story.quote}"
                  </p>
                  <p className="text-sm font-semibold text-foreground">{story.name}</p>
                  <p className="text-xs text-primary">{story.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Be Part of the Impact</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Your support helps us reach more youth, plant more trees, and tell more stories that matter.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/donate" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-medium hover:bg-primary/90 transition-colors">
                Donate Now
              </a>
              <a href="/get-involved" className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-3 text-sm font-medium hover:bg-muted transition-colors">
                Get Involved
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
