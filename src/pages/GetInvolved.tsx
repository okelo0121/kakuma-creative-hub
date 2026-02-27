import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Handshake, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sections = [
  {
    id: "volunteer",
    icon: Heart,
    title: "Volunteer",
    desc: "Support our programs by volunteering your time, skills, or mentorship. Whether you're local or remote, your contribution makes a difference in the lives of young people in Kakuma.",
    cta: "Become a Volunteer",
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Partner With Us",
    desc: "We collaborate with schools, NGOs, and community organizations to expand our impact. Partner with Kakuma Made Creative to create meaningful change together.",
    cta: "Explore Partnerships",
  },
  {
    id: "support",
    icon: UserCheck,
    title: "Support a Youth",
    desc: "Your support helps a young person access training, materials, and safe creative spaces. Sponsor a youth and invest in their future.",
    cta: "Support a Youth",
  },
];

const GetInvolved = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-sunset-brown to-sunset-deep py-20 text-sunset-cream">
        <div className="container mx-auto px-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold">
            Get Involved
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {sections.map((s, i) => (
              <motion.div key={s.id} id={s.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}>
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <s.icon className="h-8 w-8" />
                    </div>
                    <h2 className="font-display text-xl font-bold mb-3">{s.title}</h2>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                    <Button asChild>
                      <Link to="/contact">{s.cta}</Link>
                    </Button>
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

export default GetInvolved;
