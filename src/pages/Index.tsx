import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, BookOpen, Leaf, Camera, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

// Image Imports
import collage1 from "@/assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/486090211_659225156864049_1597289118659175792_n.jpg";
import collage2 from "@/assets/Education & Remedial Learning-20260228T182214Z-1-001/Education & Remedial Learning/IMG_1784.jpg";
import collage3 from "@/assets/Education & Remedial Learning-20260228T182214Z-1-001/Education & Remedial Learning/IMG_1553.jpg";
import collage4 from "@/assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/486447709_662304796556085_3588053798550722721_n (1).jpg";

import story1 from "@/assets/Education & Remedial Learning-20260228T182214Z-1-001/Education & Remedial Learning/WhatsApp Image 2026-02-07 at 10.22.20 (1).jpeg";
import story2 from "@/assets/Creative Projects-20260228T182124Z-1-001/Creative Projects/486505971_662304529889445_1362330837765008160_n (1).jpg";
import story3 from "@/assets/Storytelling & Media-20260228T182229Z-1-001/Storytelling & Media/WhatsApp Image 2026-02-07 at 11.11.02.jpeg";

import ctaBg from "@/assets/hero.jpg";
import heroImg from "@/assets/hero.jpg";
import missionBg from "@/assets/mission-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const programsTop = [
  { icon: Palette, title: "Creative", to: "/programs/creative-projects" },
  { icon: BookOpen, title: "Education", to: "/programs/education" },
  { icon: Leaf, title: "Environment", to: "/programs/environment" },
  { icon: Camera, title: "Storytelling", to: "/programs/storytelling" },
];

const StatBlock = ({ value, label, suffix }: { value: number; label: string; suffix: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-left">
      <div className="font-display text-4xl md:text-5xl font-black text-foreground">
        {count}{suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground font-medium leading-relaxed max-w-[150px]">{label}</p>
    </div>
  );
};

const HighlightText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-1 left-0 w-full h-3 bg-sunset-gold/50 -rotate-1 z-0 rounded-sm"></span>
  </span>
);

const HighlightGreen = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-1 left-0 w-full h-3 bg-agave-DEFAULT/50 -rotate-1 z-0 rounded-sm"></span>
  </span>
);

// Very basic SVG map approximation for Kenya/Africa
const MapOutline = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square">
    <svg viewBox="0 0 100 100" className="w-full h-full text-sunset-gold/80 fill-current drop-shadow-md">
      <path d="M45,10 C50,15 60,12 70,20 C80,30 90,45 80,60 C75,70 65,80 50,90 C35,80 25,65 20,50 C15,35 25,20 35,15 Z" />
    </svg>
    {/* Map Dots */}
    <div className="absolute top-[30%] left-[45%] w-3 h-3 bg-white rounded-full shadow-sm"></div>
    <div className="absolute top-[40%] left-[60%] w-3 h-3 bg-white rounded-full shadow-sm"></div>
    <div className="absolute top-[55%] left-[50%] w-3 h-3 bg-white rounded-full shadow-sm"></div>
    <div className="absolute top-[65%] left-[35%] w-3 h-3 bg-white rounded-full shadow-sm"></div>
    <div className="absolute top-[25%] left-[70%] w-3 h-3 bg-white rounded-full shadow-sm"></div>
    <div className="absolute top-[75%] left-[60%] w-3 h-3 bg-white rounded-full shadow-sm"></div>

    {/* Decorative Green Brush Stroke underneath */}
    <div className="absolute -bottom-4 -right-8 w-48 h-12 bg-agave-DEFAULT/80 rounded-[100%] blur-sm -rotate-6 z-[-1]"></div>
  </div>
)

const Index = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen text-foreground overflow-x-hidden pb-20 font-sans">

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
              <Button size="lg" variant="outline" className="border-sunset-cream/30 text-sunset-cream hover:bg-transparent hover:text-sunset-cream bg-transparent" asChild>
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer text-white/80 hover:text-white transition-colors"
          onClick={() => {
            document.getElementById('content-start')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm font-medium mb-2 uppercase tracking-widest hidden md:block">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 opacity-80" />
          </motion.div>
        </motion.div>
      </section>

      {/* Removed old top programs nav */}

      {/* 2. Impact Collage & Read out */}
      <section className="container mx-auto px-4 py-16 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center max-w-6xl mx-auto">

          {/* Left: Collage */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0">
            {/* Decorative Brush blob behind collage */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-agave-DEFAULT/20 rounded-full blur-3xl rounded-tr-none z-0"></div>

            <div className="relative z-10 w-full h-full">
              {/* Top Left Image */}
              <img src={collage1} alt="Youth in class" className="absolute top-0 left-0 w-[45%] aspect-[4/3] object-cover rounded-sm shadow-xl z-20" />
              {/* Top Right Background Image */}
              <img src={collage2} alt="Group of youth" className="absolute top-[10%] right-[10%] w-[50%] aspect-square object-cover rounded-sm shadow-xl z-10 opacity-90" />
              {/* Center overlapping image */}
              <img src={collage3} alt="Smiling child" className="absolute top-[40%] left-[20%] w-[45%] aspect-[3/4] object-cover rounded-sm shadow-2xl z-30 border-4 border-[#fcfcfc]" />
              {/* Bottom right image */}
              <img src={collage4} alt="Writing" className="absolute bottom-[5%] right-[5%] w-[55%] aspect-video object-cover rounded-sm shadow-lg z-20 border-4 border-[#fcfcfc]" />
            </div>
          </motion.div>

          {/* Right: Text Block */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-md ml-auto lg:mx-0 lg:pl-12">
            <h1 className="font-display text-5xl md:text-6xl font-black leading-tight mb-8">
              What have <br /> we done with <br /> <HighlightText>your help?</HighlightText>
            </h1>
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed mb-10">
              <p>
                Through the support of donors and volunteers, Kakuma Made Creative has successfully established safe spaces for learning and expression within the refugee camp.
              </p>
              <p>
                Our programs directly improve the mental health and skills of local youth, giving them practical tools for a better future. Every brushstroke, every read line, and every recycled bottle makes a lasting difference.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/about" className="font-semibold text-sm hover:text-sunset-gold transition-colors">
                About us &gt;
              </Link>
              <Link to="/donate" className="bg-black text-white px-8 py-4 text-sm font-semibold rounded-sm hover:bg-black/80 transition-colors">
                Donate now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stories Section */}
      <section className="container mx-auto px-4 py-24 mb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-xl">
              Learn <HighlightText>the stories</HighlightText> of those we've already helped
            </h2>
            <div className="hidden md:flex gap-2">
              <button className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors">&lt;</button>
              <button className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors">&gt;</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Story Card 1 */}
            <div className="relative group">
              <div className="absolute -left-6 top-1/2 w-24 h-12 bg-agave-DEFAULT/60 blur-md rounded-[100%] -rotate-12 z-0"></div>
              <div className="relative z-10 bg-[#fcfcfc]">
                <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6">
                  <img src={story1} alt="Andrew" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">Andrew</h3>
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest font-semibold">12 years</p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  Andrew struggles with formal learning but found his voice in our remedial classes. He now leads reading sessions for younger children in his block.
                </p>
                <Link to="/programs/education" className="text-xs font-semibold hover:text-sunset-gold transition-colors">Learn more &gt;</Link>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="relative group md:translate-y-12">
              <div className="relative z-10 bg-[#fcfcfc]">
                <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6">
                  <img src={story2} alt="Sumaiya" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">Sumaiya</h3>
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest font-semibold">17 years</p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  Through the Creative Projects initiative, Sumaiya learned how to weave baskets from discarded plastics, providing a small income for her family.
                </p>
                <Link to="/programs/creative-projects" className="text-xs font-semibold hover:text-sunset-gold transition-colors">Learn more &gt;</Link>
              </div>
            </div>

            {/* Story Card 3 */}
            <div className="relative group">
              <div className="absolute -right-6 top-1/3 w-32 h-16 bg-agave-dark/40 blur-md rounded-[100%] rotate-12 z-0"></div>
              <div className="relative z-10 bg-[#fcfcfc]">
                <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6">
                  <img src={story3} alt="Zakiya" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">Zakiya</h3>
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest font-semibold">21 years</p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  Equipped with a borrowed camera from our Storytelling program, Zakiya now documents life in Kakuma, sharing stories of hope through an unfiltered lens.
                </p>
                <Link to="/programs/storytelling" className="text-xs font-semibold hover:text-sunset-gold transition-colors">Learn more &gt;</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Stats and Map Section */}
      <section className="container mx-auto px-4 py-24 mb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Stats */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-lg mx-auto lg:mx-0">
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16">
              We are always where <br /> others <HighlightText>need help.</HighlightText>
            </h2>

            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              {/* Stat 1 with green icon background */}
              <div className="relative">
                <div className="absolute -left-2 -top-2 w-10 h-10 bg-agave-DEFAULT/30 rounded-full blur-sm"></div>
              <StatBlock value={500} label="Meals served annually to host community" suffix="+" />
              </div>
              {/* Stat 2 */}
              <StatBlock value={350} label="Seedlings planted in Kakuma" suffix="+" />
              {/* Stat 3 with pinkish dot */}
              <div className="relative">
                <div className="absolute -left-2 -top-2 w-10 h-10 bg-pink-500/30 rounded-full blur-sm"></div>
                <StatBlock value={200} label="Total families reached by our help" suffix="+" />
              </div>
              {/* Stat 4 with yellow dot */}
              <div className="relative">
                <div className="absolute -left-2 -top-2 w-10 h-10 bg-sunset-gold/30 rounded-full blur-sm"></div>
                <StatBlock value={150} label="Volunteer teachers active in our spaces" suffix="+" />
              </div>
            </div>
          </motion.div>

          {/* Right: Map Graphic */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <MapOutline />
          </motion.div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="container mx-auto px-4 py-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-6xl mx-auto relative overflow-hidden rounded-md shadow-2xl">
          {/* Background Image */}
          <img src={ctaBg} alt="Background showing Kakuma landscape" className="absolute inset-0 w-full h-full object-cover object-center" />

          {/* Dark Overlay with subtle gradients simulating brushed lighting */}
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
          <div className="absolute -left-20 top-1/2 w-64 h-32 bg-agave-DEFAULT/80 blur-3xl rounded-[100%] -rotate-12 z-0 opacity-60"></div>
          <div className="absolute -right-20 bottom-0 w-80 h-48 bg-sunset-gold/80 blur-3xl rounded-[100%] rotate-12 z-0 opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 py-24 md:py-32 flex flex-col items-center text-center px-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-12">
              Join our action!<br /> Everyone can help.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate" className="bg-sunset-gold text-stone-900 px-8 py-4 text-sm font-bold rounded-sm hover:bg-sunset-gold/90 transition-colors">
                Donate now
              </Link>
              <Link to="/get-involved" className="bg-agave-DEFAULT text-white px-8 py-4 text-sm font-bold rounded-sm hover:bg-agave-dark transition-colors">
                Become a volunteer
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer Info Area - mimicking the bottom of the Dribbble layout slightly before the actual layout footer */}
      <div className="container mx-auto px-4 mt-16 max-w-6xl text-center md:text-left border-b border-border/50 pb-8 hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-semibold text-muted-foreground">
            Questions? Join the Kakuma Advocates.
          </div>
          <div className="flex flex-col md:flex-row gap-6 font-bold">
            <span className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">📞</div> +254 700 000 000</span>
            <span className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">✉️</div> hello@kakumamade.org</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
