
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Toggle language between English and Swedish
  const toggleLanguage = () => {
    const newLanguage: Language = language === "en" ? "sv" : "en";
    setLanguage(newLanguage);
  };

  // Handle scroll event to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  // Navigation links
  const navLinks = [
    { path: t("path.home"), label: t("nav.home") },
    { path: t("path.about"), label: t("nav.about") },
    { path: t("path.work"), label: t("nav.work") },
    { path: t("path.blog"), label: t("nav.blog") },
    { path: t("path.podcast"), label: t("nav.podcast") },
    { path: t("path.news"), label: t("nav.news") },
    { path: t("path.getInvolved"), label: t("nav.getInvolved") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to={t("path.home")} className="flex items-center">
          <span className="font-serif text-xl font-bold text-terracotta">
            Ternafit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition duration-200 hover:text-terracotta ${
                isActive(link.path) ? "text-terracotta" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Language toggle and donate button */}
        <div className="hidden items-center space-x-4 md:flex">
          <button
            onClick={toggleLanguage}
            className="flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium hover:bg-muted transition duration-200"
            aria-label="Toggle language"
          >
            <Globe className="mr-1 h-4 w-4" />
            {language === "en" ? "EN" : "SV"}
          </button>
          <Link to={t("path.contact")}>
            <Button variant="outline" size="sm">
              {t("footer.contact")}
            </Button>
          </Link>
          <Link to={t("path.donate")}>
            <Button
              className="bg-terracotta text-white hover:bg-terracotta/90"
              size="sm"
            >
              {t("nav.donate")}
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium hover:bg-muted transition duration-200"
            aria-label="Toggle language"
          >
            <Globe className="mr-1 h-4 w-4" />
            {language === "en" ? "EN" : "SV"}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-16 z-50 transform transition-all duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        {mobileMenuOpen && (
          <div className="h-full w-full bg-background p-4 shadow-lg">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-md p-3 font-medium ${isActive(link.path) ? "bg-muted text-terracotta" : "hover:bg-muted"}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 space-y-2">
                <Link to={t("path.donate")}>
                  <Button
                    className="w-full bg-terracotta text-white hover:bg-terracotta/90"
                    size="lg"
                  >
                    {t("nav.donate")}
                  </Button>
                </Link>
                <Link to={t("path.contact")}>
                  <Button className="w-full" variant="outline" size="lg">
                    {t("footer.contact")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
