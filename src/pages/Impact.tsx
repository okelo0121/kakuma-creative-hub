import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
  { label: "Youth engaged annually in creative and environmental projects", value: 100, suffix: "+" },
  { label: "Children supported through remedial education", value: 50, suffix: "+" },
  { label: "Recycled and upcycled products created", value: 30, suffix: "+" },
  { label: "Community stories documented and shared", value: 20, suffix: "+" },
];

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center p-6 rounded-xl bg-card border border-border">
      <div className="font-display text-5xl md:text-6xl font-bold text-primary mb-3">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

const Impact = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-sunset-brown to-sunset-deep py-20 text-sunset-cream">
        <div className="container mx-auto px-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold">
            Our Impact
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl font-bold mb-6">Stories of Change</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every young person we work with carries a story of resilience and creativity. Through our programs, they find their voice, develop new skills, and create positive change in their community.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-card border border-border p-6 text-left">
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Kakuma Made Creative gave me a chance to discover my talent in art and earn from it."
                </p>
                <p className="text-xs font-semibold text-primary">— Youth Participant</p>
              </div>
              <div className="rounded-xl bg-card border border-border p-6 text-left">
                <p className="text-sm text-muted-foreground italic mb-3">
                  "The remedial classes helped my child catch up in school. I am so grateful."
                </p>
                <p className="text-xs font-semibold text-primary">— Community Parent</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
