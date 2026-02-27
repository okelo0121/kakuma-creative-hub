import { motion } from "framer-motion";
import { MessageCircle, Palette, Users, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const activities = [
  { icon: MessageCircle, title: "Peacebuilding Workshops", desc: "Dialogue sessions that promote understanding and conflict resolution among diverse communities." },
  { icon: Palette, title: "Community Art Campaigns", desc: "Creative campaigns that unite youth through collaborative art projects." },
  { icon: Users, title: "Youth Forums & Mentorship", desc: "Forums where young people share experiences and receive guidance from mentors." },
  { icon: Eye, title: "Public Exhibitions & Storytelling", desc: "Events showcasing youth talent and sharing stories that inspire peace." },
];

const PeaceOutreach = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-sunset-brown to-sunset-deep py-20 text-sunset-cream">
        <div className="container mx-auto px-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold">
            Peace & Community Outreach
          </motion.h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Peacebuilding and community outreach are central to Kakuma Made Creative. We bring together youth from diverse backgrounds to engage in dialogue, creative collaboration, and community activities that promote unity and mutual understanding.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Outreach Activities</h2>
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {activities.map((a, i) => (
              <motion.div key={a.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}>
                <Card className="h-full">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <a.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{a.title}</h3>
                      <p className="text-sm text-muted-foreground">{a.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              "Our outreach activities create safe spaces where young people learn teamwork, conflict resolution, and peaceful communication."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PeaceOutreach;
