import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sunset-brown text-sunset-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="font-display text-xl font-bold mb-3">Kakuma Made Creative</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              A youth‑led community initiative in Kakuma Refugee Camp using creativity, education, and storytelling to build skills and create sustainable opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/programs" className="hover:opacity-100 transition-opacity">Programs</Link></li>
              <li><Link to="/impact" className="hover:opacity-100 transition-opacity">Impact</Link></li>
              <li><Link to="/donate" className="hover:opacity-100 transition-opacity">Donate</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> kakumamade@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +254 711 130 053</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Kakuma Refugee Camp, Turkana County, Kenya</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-sunset-cream/10 hover:bg-sunset-cream/20 transition-colors text-sm font-bold">f</a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-sunset-cream/10 hover:bg-sunset-cream/20 transition-colors text-sm font-bold">𝕏</a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-sunset-cream/10 hover:bg-sunset-cream/20 transition-colors text-sm font-bold">in</a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-sunset-cream/10 hover:bg-sunset-cream/20 transition-colors text-sm font-bold">ig</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-sunset-cream/20 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Kakuma Made Creative. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
