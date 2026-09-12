import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-13.5 max-w-6xl items-center justify-between px-5 lg:px-6">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 lg:mr-auto"
        >
          <span className="brand-gradient-bg flex h-6 w-6 items-center justify-center rounded-md text-[9px] font-bold text-white">
            DS
          </span>

          <span className="text-[16px] font-bold text-gray-900">
            Dev <span className="gradient-text">Stack</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex lg:mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] font-bold transition ${
                link.name === "Home"
                  ? "text-pink-500"
                  : "text-slate-600 hover:text-pink-500"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-1.5 lg:flex lg:ml-auto">
          <button className="px-3 py-2 text-[11px] font-medium text-slate-600 transition hover:text-pink-500">
            Sign In
          </button>

          <button className="brand-gradient-bg rounded-full px-4 py-2 text-[11px] font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <button className="px-2 py-2 text-[10px] font-medium text-slate-600 transition hover:text-pink-500">
            Sign In
          </button>

          <button className="brand-gradient-bg rounded-full px-3 py-1.5 text-[10px] font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium ${
                  link.name === "Home"
                    ? "text-pink-500"
                    : "text-slate-600 hover:text-pink-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;