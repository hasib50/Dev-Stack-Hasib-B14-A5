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
      <div className="mx-auto flex h-[54px] max-w-6xl items-center justify-between px-5 lg:px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-[9px] font-bold text-white">
            DS
          </span>

          <span className="text-[16px] font-bold text-gray-900">
            Dev <span className="gradient-text">Stack</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
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
        <div className="hidden items-center gap-1.5 sm:flex">
          <button className="px-3 py-2 text-[11px] font-medium text-slate-600 transition hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-4 py-2 text-[11px] font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
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

            <div className="flex gap-3 border-t border-gray-100 pt-3">
              <button className="text-sm text-slate-600">
                Sign In
              </button>

              <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;