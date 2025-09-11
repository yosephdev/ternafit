import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Menu, X, Globe, ChevronDown } from "lucide-react"; // Added ChevronDown

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track which dropdown is open
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const toggleLanguage = () => {
    const newLanguage: Language = language === "en" ? "sv" : "en";
    setLanguage(newLanguage);
  };

  // Improved dropdown handling with delays
  const handleDropdownEnter = (labelKey: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(labelKey);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // 150ms delay before closing
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
    };
    
    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false); // Close mobile menu on route change
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // --- STRATEGY: Restructure nav links for clarity and add subLinks for dropdowns ---
  const navLinks = [
    { path: t("path.home"), labelKey: "nav.home" },
    { path: t("path.about"), labelKey: "nav.about" },
    { 
      labelKey: "nav.ourWork",
      subLinks: [
        { path: t("path.work"), labelKey: "nav.ourApproach" },
        { path: t("path.impact"), labelKey: "nav.impactAndStories" },
        { path: t("path.scholarshipProgram"), labelKey: "nav.scholarshipProgram" },
      ]
    },
    { 
      labelKey: "nav.newsAndUpdates",
      subLinks: [
        { path: t("path.news"), labelKey: "nav.news" },
        { path: t("path.blog"), labelKey: "nav.blog" },
      ]
    },
    { path: t("path.getInvolved"), labelKey: "nav.getInvolved" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={t("path.home")} className="flex items-center">
          <img 
            src="/images/logos/ternafit-logo-nobg.png" 
            alt="Ternafit Logo" 
            className="h-16 w-auto"
          />
        </Link>

        {/* --- UX IMPROVEMENT: Desktop Navigation with Dropdown Menu --- */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => 
            link.subLinks ? (
              <div 
                key={link.labelKey}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(link.labelKey)}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                  className={`flex items-center font-medium transition duration-200 hover:text-terracotta ${openDropdown === link.labelKey || link.subLinks.some(sub => isActive(sub.path)) ? "text-terracotta" : "text-foreground"}`}
                  onClick={() => setOpenDropdown(openDropdown === link.labelKey ? null : link.labelKey)}
                >
                  {t(link.labelKey)}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === link.labelKey && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 border z-50"
                    onMouseEnter={() => handleDropdownEnter(link.labelKey)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="py-2">
                      {link.subLinks.map((subLink) => (
                        <Link 
                          key={subLink.path} 
                          to={subLink.path} 
                          className={`block px-4 py-3 text-sm transition-colors ${
                            isActive(subLink.path) 
                              ? "font-bold text-terracotta bg-terracotta/10" 
                              : "text-foreground hover:bg-muted hover:text-terracotta"
                          }`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {t(subLink.labelKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.path} to={link.path!} className={`font-medium transition duration-200 hover:text-terracotta ${isActive(link.path!) ? "text-terracotta" : "text-foreground"}`}>
                {t(link.labelKey)}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <button onClick={toggleLanguage} className="flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium hover:bg-muted transition duration-200" aria-label="Toggle language">
            <Globe className="mr-1 h-4 w-4" />
            {language === "en" ? "EN" : "SV"}
          </button>
          <Button asChild variant="outline" size="sm">
            <Link to={t("path.contact")}>{t("footer.contactUs")}</Link>
          </Button>
          <Button asChild className="bg-terracotta text-white hover:bg-terracotta/90" size="sm">
            <Link to={t("path.donate")}>{t("nav.donate")}</Link>
          </Button>
        </div>

        <div className="flex items-center space-x-3 md:hidden">
          <button onClick={toggleLanguage} className="flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium hover:bg-muted transition duration-200" aria-label="Toggle language">
            <Globe className="mr-1 h-4 w-4" />
            {language === "en" ? "EN" : "SV"}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md hover:bg-muted" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* --- UX IMPROVEMENT: Mobile menu with nested structure --- */}
      <div className={`fixed inset-0 top-16 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-full w-full bg-background p-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => 
              link.subLinks ? (
                <div key={link.labelKey}>
                  <p className="p-3 font-medium text-foreground flex items-center">{t(link.labelKey)} <ChevronDown className="ml-1 h-4 w-4" /></p>
                  <div className="flex flex-col pl-4 border-l-2 border-muted">
                    {link.subLinks.map(subLink => (
                      <Link key={subLink.path} to={subLink.path} className={`rounded-md p-3 font-medium ${isActive(subLink.path) ? "bg-muted text-terracotta" : "text-foreground hover:bg-muted"}`}>
                        {t(subLink.labelKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.path} to={link.path!} className={`rounded-md p-3 font-medium ${isActive(link.path!) ? "bg-muted text-terracotta" : "text-foreground hover:bg-muted"}`}>
                  {t(link.labelKey)}
                </Link>
              )
            )}
            <div className="mt-4 space-y-2 border-t pt-4">
              <Button asChild className="w-full bg-terracotta text-white hover:bg-terracotta/90" size="lg">
                <Link to={t("path.donate")}>{t("nav.donate")}</Link>
              </Button>
              <Button asChild className="w-full" variant="outline" size="lg">
                <Link to={t("path.contact")}>{t("footer.contactUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;