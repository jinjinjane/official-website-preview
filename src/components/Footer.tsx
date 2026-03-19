import { Link } from "react-router-dom";
import logoText from "@/assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 3xl:py-24 px-4">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1800px] mx-auto">
        <div className="grid md:grid-cols-4 gap-10 3xl:gap-16">
          <div>
            <img src={logoText} alt="Jovida" className="h-6 3xl:h-9 mb-3" style={{ filter: 'invert(1) hue-rotate(180deg)' }} />
            <p className="text-background/60 text-sm 3xl:text-base">
              Your proactive AI life agent. Know your goals, get you there.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm 3xl:text-base uppercase tracking-wider text-background/40">Product</h4>
            <ul className="space-y-2 text-sm 3xl:text-base text-background/60">
              <li><Link to="/#features" className="hover:text-background transition-colors">Features</Link></li>
              <li><Link to="/agents" className="hover:text-background transition-colors">Playbook</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm 3xl:text-base uppercase tracking-wider text-background/40">Resources</h4>
            <ul className="space-y-2 text-sm 3xl:text-base text-background/60">
              <li><Link to="/blog" className="hover:text-background transition-colors">Blog</Link></li>
              <li><Link to="/company" className="hover:text-background transition-colors">Company</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm 3xl:text-base uppercase tracking-wider text-background/40">Legal</h4>
            <ul className="space-y-2 text-sm 3xl:text-base text-background/60">
              <li><Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link></li>
              <li><Link to="/subscription-guide" className="hover:text-background transition-colors">Subscription Guide</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm 3xl:text-base text-background/40">
          &copy; {new Date().getFullYear()} FluxVita Corp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
