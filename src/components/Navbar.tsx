import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoText from "@/assets/logo-text.webp";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Playbook", href: "/agents" },
  { label: "Blog", href: "/blog" },
  { label: "Company", href: "/company" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl">
      <div className="bg-card/90 backdrop-blur-xl rounded-full px-6 py-3 3xl:px-10 3xl:py-5 flex items-center justify-between shadow-elevated border border-border">
        <Link to="/">
          <img src={logoText} alt="Jovida" className="h-6 3xl:h-9" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 3xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm 3xl:text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://apps.apple.com/us/app/jovida/id6752009326"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background text-sm 3xl:text-base font-semibold px-5 py-2 3xl:px-7 3xl:py-3 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 3xl:w-5 3xl:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download App
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 bg-card/95 backdrop-blur-xl rounded-2xl p-4 shadow-elevated border border-border animate-scale-in">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://apps.apple.com/us/app/jovida/id6752009326"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block bg-foreground text-background text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Download App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
