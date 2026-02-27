import { motion } from "framer-motion";
import { Heart, Shield, BookOpen, Palette, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const uses = [
  { icon: Palette, text: "Buy creative and learning materials" },
  { icon: Users, text: "Support youth‑led projects" },
  { icon: Heart, text: "Run peacebuilding and outreach activities" },
  { icon: BookOpen, text: "Expand education and environmental programs" },
];

const Donate = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-sunset-brown to-sunset-deep py-20 text-sunset-cream">
        <div className="container mx-auto px-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold">
            Support Our Work
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Your Donation Makes a Difference</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every contribution, big or small, directly impacts the lives of young people in Kakuma Refugee Camp. Your donation helps us continue empowering youth through creativity, education, and community action.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 mb-12">
            {uses.map((u, i) => (
              <motion.div key={u.text} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <u.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">{u.text}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Donation Details */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-center">How to Donate</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Mobile Money (M-Pesa)</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Paybill / Till Number: <span className="font-medium text-foreground">Coming Soon</span></p>
                      <p>Account Name: <span className="font-medium text-foreground">Kakuma Made Creative</span></p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Bank Transfer</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Bank: <span className="font-medium text-foreground">Coming Soon</span></p>
                      <p>Account Name: <span className="font-medium text-foreground">Kakuma Made Creative</span></p>
                      <p>Account Number: <span className="font-medium text-foreground">Coming Soon</span></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Transparency */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-8">
            <div className="flex items-start gap-3 p-6 rounded-xl bg-muted/50 border border-border">
              <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Transparency & Accountability</h4>
                <p className="text-sm text-muted-foreground">
                  We are committed to using every donation responsibly. Funds are tracked and allocated to specific programs, and we regularly share updates on how contributions are making an impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
