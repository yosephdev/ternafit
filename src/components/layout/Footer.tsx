import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-10 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* --- RESTRUCTURED: Columns are now more logical and less redundant --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1. About Ternafit */}
          <div className="col-span-1">
            <Link to={t("path.home")} className="inline-block mb-4">
              <img 
                src="/images/logos/ternafit-logo-nobg.png" 
                alt="Ternafit Logo" 
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.tagline")}
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Jungfrugatan 1F, 641 31 Katrineholm, {t("footer.country")}</li>
         
              <li>{t("footer.orgNumber")}: 802548-9231</li>
              <li className="pt-2 flex items-center gap-2">
                <Mail className="h-4 w-4" /> 
                <a href="mailto:info@ternafit.org" className="hover:text-terracotta">
                  info@ternafit.org
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/ternafit" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5 text-gray-600 hover:text-terracotta" /></a>
              <a href="https://twitter.com/InfoTernafit" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5 text-gray-600 hover:text-terracotta" /></a>
              <a href="http://instagram.com/ternafit" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5 text-gray-600 hover:text-terracotta" /></a>
            </div>
          </div>

          {/* 2. Explore */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.explore")}</h3>
            <ul className="space-y-2">
              <li><Link to={t("path.about")} className="text-sm text-gray-600 hover:text-terracotta">{t("nav.about")}</Link></li>
              <li><Link to={t("path.work")} className="text-sm text-gray-600 hover:text-terracotta">{t("nav.work")}</Link></li>
              <li><Link to={t("path.impact")} className="text-sm text-gray-600 hover:text-terracotta">{t("footer.ourImpact")}</Link></li>
              <li><Link to={t("path.stories")} className="text-sm text-gray-600 hover:text-terracotta">{t("footer.impactStories")}</Link></li>
              <li><Link to={t("path.news")} className="text-sm text-gray-600 hover:text-terracotta">{t("nav.news")}</Link></li>
            </ul>
          </div>

          {/* 3. Get Involved */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.getInvolved")}</h3>
            <ul className="space-y-2">
              <li><Link to={t("path.donate")} className="text-sm text-gray-600 hover:text-terracotta font-semibold">{t("nav.donate")}</Link></li>
              <li><Link to={t("path.getInvolved")} className="text-sm text-gray-600 hover:text-terracotta">{t("footer.volunteer")}</Link></li>
              <li><a href="/reports/ternafit-annual-report-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-terracotta">{t("footer.annualReport")}</a></li>
               <li>
                <a
                  href="https://tigray.ternafit.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-terracotta flex items-center space-x-2"
                >
                  {/* <img 
                    src="/images/logos/logo-tigray-knowledge-base.svg" 
                    alt="Tigray Knowledge Base Logo" 
                    className="h-4 w-auto"
                  /> */}
                  <span>{t("footer.knowledgeBase")}</span>
                </a>
              </li>
              <li><Link to={t("path.contact")} className="text-sm text-gray-600 hover:text-terracotta">{t("footer.contactUs")}</Link></li>
            </ul>
          </div>

          {/* 4. Subscribe */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("common.subscribe")}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.newsletterDescription")}
            </p>
            <form 
              action="https://dev.us9.list-manage.com/subscribe/post?u=17d8ed2a68846353b5803e6f6&id=43d363d756&f_id=001c52e1f0" 
              method="post" 
              name="mc-embedded-subscribe-form"
              className="validate flex gap-2"
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
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                  <input type="text" name="b_17d8ed2a68846353b5803e6f6_43d363d756" tabIndex={-1} defaultValue="" />
              </div>
              <Button type="submit" name="subscribe" className="bg-terracotta hover:bg-terracotta/90 text-white" size="sm">
                {t("common.subscribe")}
              </Button>
            </form>
          </div>
        </div>

        {/* Partner Trust Signals - Following Gemini Strategic Recommendations */}
        <div className="border-t border-gray-300 mt-8 pt-6">
          <h3 className="text-lg font-bold mb-4 text-center">Our Trusted Partner</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <a 
              href="https://anenitigray.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center flex flex-col items-center hover:text-terracotta transition-colors duration-200 group"
            >
              <img 
                src="/images/logos/AneniTigray-Development-Services-logo.png" 
                alt="Aneni Tigray Development Services Logo" 
                className="h-12 w-auto mb-2 group-hover:scale-105 transition-transform duration-200"
              />
              <p className="font-medium">Anenitigray Development Services (ADS)</p>
              <p className="text-xs">Local Implementing Partner - Mekelle, Tigray</p>
              <p className="text-xs text-terracotta mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Visit Website →</p>
            </a>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            Working together to deliver direct impact in Tigray communities
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          {/* --- MODIFIED: Copyright year is now dynamic --- */}
          <p>&copy; {currentYear} Ternafit. {t("footer.rights")}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to={t("path.privacyPolicy")} className="hover:text-terracotta">{t("footer.privacy")}</Link>
            <Link to={t("path.termsOfService")} className="hover:text-terracotta">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;