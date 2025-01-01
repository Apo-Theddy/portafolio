import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavProps {
  handleAboutMeSection: () => void;
  handleProjectsSection: () => void;
  handleContactSection: () => void;
  handleIndexSection: () => void;
  handleSkillsSection: () => void;
  handleServicesSection: () => void;
  logoSrc: any;
  fontClass: string;
}

interface NavItem {
  label: string;
  action: (() => void) | null;
}

const Navigation: React.FC<NavProps> = ({
  handleProjectsSection,
  handleAboutMeSection,
  handleContactSection,
  handleSkillsSection,
  handleServicesSection,
  handleIndexSection,
  logoSrc,
  fontClass
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'About Me', action: handleAboutMeSection },
    { label: 'Projects', action: handleProjectsSection },
    { label: 'Skills', action: handleSkillsSection },
    { label: 'Services', action: handleServicesSection },
    { label: 'Contact', action: handleContactSection }
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (action: (() => void) | null) => {
    setIsMenuOpen(false);
    if (action) action();
  };

  return (
    <nav className={`top-0 left-0 right-0 z-50 ${fontClass}`}>
      <div className="inset-0 bg-white/70 backdrop-blur-md" />

      <div className="relative z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleIndexSection}>
            <Image
              src={logoSrc}
              width={40}
              height={40}
              alt="ApoTheddy logo"
              className="w-10 h-10 rounded-full ring-2 ring-gray-200 hover:ring-blue-400 transition-all duration-300"
            />
            <span className="text-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={handleIndexSection}>
              ApoTheddy
            </span>
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => item.action && handleNavClick(item.action)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={handleMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        <div
          className={`
            md:hidden 
            fixed left-0 right-0 
            bg-white/95 backdrop-blur-sm
            border-b shadow-lg
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'top-16 opacity-100 pointer-events-auto' : '-top-full opacity-0 pointer-events-none'}
          `}
        >
          <ul className="px-4 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.action)}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
