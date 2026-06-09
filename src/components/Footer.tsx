import { Link } from "react-router-dom";
import jovidaWordmarkDark from "@/assets/jovida-wordmark-dark.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 3xl:py-24 px-4">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1800px] mx-auto">
        <div className="grid md:grid-cols-4 gap-10 3xl:gap-16">
          <div>
            <Link to="/" className="inline-flex" aria-label="Jovida home">
              <img src={jovidaWordmarkDark} alt="Jovida" className="h-9 w-auto 3xl:h-11" />
            </Link>
            <p className="mt-4 text-background/60 text-sm 3xl:text-base">
              AI agents designed to work in the human loop.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm 3xl:text-base uppercase tracking-wider text-background/40">Product</h4>
            <ul className="space-y-2 text-sm 3xl:text-base text-background/60">
              <li><Link to="/" className="hover:text-background transition-colors">Jovida Daily</Link></li>
              <li><Link to="/jovida-life-coach" className="hover:text-background transition-colors">Jovida Life Coach</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm 3xl:text-base uppercase tracking-wider text-background/40">Resources</h4>
            <ul className="space-y-2 text-sm 3xl:text-base text-background/60">
              <li><Link to="/blog" className="hover:text-background transition-colors">Blog</Link></li>
              <li><Link to="/agents" className="hover:text-background transition-colors">Playbook</Link></li>
              <li><Link to="/company" className="hover:text-background transition-colors">Company</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm 3xl:text-base uppercase tracking-wider text-background/40">Legal</h4>
            <ul className="space-y-2 text-sm 3xl:text-base text-background/60">
              <li><Link to="/jovida-life-coach/privacy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/jovida-life-coach/terms" className="hover:text-background transition-colors">Terms of Service</Link></li>
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
