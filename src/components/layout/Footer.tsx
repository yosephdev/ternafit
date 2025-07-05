
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted mt-10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-xl font-serif font-bold text-terracotta">Ternafit</h3>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Supporting the Tigrean community through humanitarian aid, education, and advocacy.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/ternafit" className="text-gray-600 hover:text-terracotta" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/InfoTernafit" className="text-gray-600 hover:text-terracotta" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="http://instagram.com/ternafit" className="text-gray-600 hover:text-terracotta" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-terracotta">{t("nav.about")}</Link></li>
              <li><Link to="/work" className="text-sm text-gray-600 hover:text-terracotta">{t("nav.work")}</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-terracotta">{t("nav.blog")}</Link></li>
              <li><Link to="/news" className="text-sm text-gray-600 hover:text-terracotta">{t("nav.news")}</Link></li>
              <li><Link to="/podcast" className="text-sm text-gray-600 hover:text-terracotta">{t("nav.podcast")}</Link></li>
            </ul>
          </div>

          {/* Support Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support Us</h3>
            <ul className="space-y-2">
              <li><Link to="/donate" className="text-sm text-gray-600 hover:text-terracotta">{t("nav.donate")}</Link></li>
              <li><Link to="/get-involved" className="text-sm text-gray-600 hover:text-terracotta">{t("nav.getInvolved")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("common.contact")}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Ternafit</li>
              <li>Jungfrugatan 1F</li>
              <li>641 31 Katrineholm</li>
              <li>Sweden</li>
              <li className="pt-2 flex items-center">
                <Mail className="h-4 w-4 mr-2" /> 
                <a href="mailto:info@ternafit.org" className="hover:text-terracotta">
                  info@ternafit.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("common.subscribe")}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest news and events.
            </p>
            <form 
              action="https://dev.us9.list-manage.com/subscribe/post?u=17d8ed2a68846353b5803e6f6&id=43d363d756&f_id=001c52e1f0" 
              method="post" 
              name="mc-embedded-subscribe-form"
              className="validate flex flex-col sm:flex-row gap-2"
              target="_blank" 
              noValidate
            >
              <Input 
                type="email" 
                name="EMAIL" 
                placeholder={t("common.email")}
                className="flex-grow text-sm"
                required 
              />
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                  <input type="text" name="b_17d8ed2a68846353b5803e6f6_43d363d756" tabIndex={-1} defaultValue="" />
              </div>
              <Button 
                type="submit" 
                name="subscribe"
                className="bg-terracotta hover:bg-terracotta/90 text-white"
                size="sm"
              >
                {t("common.subscribe")}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>{t("footer.rights")}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-terracotta">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms-of-service" className="hover:text-terracotta">
              {t("footer.terms")}
            </Link>
            <Link to="/contact" className="hover:text-terracotta">
              {t("footer.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
