import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const dropdowns = {
  about: {
    label: "About",
    items: [
      { label: "Who We Are", to: "/about#who-we-are" },
      { label: "Our Story", to: "/about#our-story" },
      { label: "Mission & Vision", to: "/about#mission-vision" },
      { label: "Our Values", to: "/about#our-values" },
    ],
  },
  programs: {
    label: "Programs",
    items: [
      { label: "Creative Projects", to: "/programs#creative" },
      { label: "Education & Learning", to: "/programs#education" },
      { label: "Environmental Initiatives", to: "/programs#environment" },
      { label: "Storytelling & Media", to: "/programs#storytelling" },
    ],
  },
  involve: {
    label: "Get Involved",
    items: [
      { label: "Volunteer", to: "/get-involved#volunteer" },
      { label: "Partner With Us", to: "/get-involved#partner" },
      { label: "Support a Youth", to: "/get-involved#support" },
    ],
  },
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeAll}>
          <img src={logo} alt="Kakuma Made Creative logo" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-bold text-foreground hidden sm:inline">
            Kakuma Made Creative
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted",
              isActive("/") && "text-primary"
            )}
          >
            Home
          </Link>

          {Object.entries(dropdowns).map(([key, dd]) => (
            <div key={key} className="relative">
              <button
                onClick={() => toggleDropdown(key)}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted",
                  openDropdown === key && "bg-primary/10 text-primary"
                )}
              >
                {dd.label}
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openDropdown === key && "rotate-180")} />
              </button>
              {openDropdown === key && (
                <div className="absolute top-full left-0 mt-1 w-52 rounded-md border border-border bg-popover p-1 shadow-lg">
                  {dd.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={closeAll}
                      className="block rounded-sm px-3 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/peace-outreach"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted",
              isActive("/peace-outreach") && "text-primary"
            )}
          >
            Peace & Outreach
          </Link>

          <Link
            to="/impact"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted",
              isActive("/impact") && "text-primary"
            )}
          >
            Impact
          </Link>

          <Link
            to="/donate"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted",
              isActive("/donate") && "text-primary font-semibold"
            )}
          >
            Donate
          </Link>

          <Link
            to="/contact"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted",
              isActive("/contact") && "text-primary"
            )}
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          <Link to="/" onClick={closeAll} className="block py-2 text-sm font-medium hover:text-primary">Home</Link>

          {Object.entries(dropdowns).map(([key, dd]) => (
            <div key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="flex w-full items-center justify-between py-2 text-sm font-medium hover:text-primary"
              >
                {dd.label}
                <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === key && "rotate-180")} />
              </button>
              {openDropdown === key && (
                <div className="pl-4 space-y-1">
                  {dd.items.map((item) => (
                    <Link key={item.to} to={item.to} onClick={closeAll} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/peace-outreach" onClick={closeAll} className="block py-2 text-sm font-medium hover:text-primary">Peace & Outreach</Link>
          <Link to="/impact" onClick={closeAll} className="block py-2 text-sm font-medium hover:text-primary">Impact</Link>
          <Link to="/donate" onClick={closeAll} className="block py-2 text-sm font-medium hover:text-primary">Donate</Link>
          <Link to="/contact" onClick={closeAll} className="block py-2 text-sm font-medium hover:text-primary">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
