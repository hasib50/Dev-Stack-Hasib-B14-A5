const Footer = () => {
  return (
    <footer
      id="contact"
      className="mt-12 border-t border-slate-100 bg-white"
    >
      {/* M Footer */}
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr] lg:px-6">

        {/* Brand */}
        <div>
          <a
            href="#home"
            className="flex items-center gap-2"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-linear-to-br from-orange-400 via-pink-500 to-purple-600 text-[9px] font-bold text-white">
              DS
            </span>

            <span className="text-[15px] font-bold text-slate-900">
              Dev <span className="gradient-text">Stack</span>
            </span>
          </a>

          <p className="mt-3 max-w-xs text-xs leading-5 text-slate-400">
            Curated, technologies, and resources for developers building
            modern software.
          </p>

          {/* Social Links */}
          <div className="mt-4 flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold text-slate-500 transition hover:text-pink-500"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold text-slate-500 transition hover:text-pink-500"
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold text-slate-500 transition hover:text-pink-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-xs font-semibold text-slate-900">
            Product
          </h3>

          <ul className="mt-3 space-y-2 text-[10px] text-slate-400">
            <li>
              <a
                href="#home"
                className="transition hover:text-pink-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="transition hover:text-pink-500"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition hover:text-pink-500"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-semibold text-slate-900">
            Company
          </h3>

          <ul className="mt-3 space-y-2 text-[10px] text-slate-400">
            <li>
              <a
                href="#about"
                className="transition hover:text-pink-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition hover:text-pink-500"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-semibold text-slate-900">
            Legal
          </h3>

          <ul className="mt-3 space-y-2 text-[10px] text-slate-400">
            <li>
              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* B Footer */}
      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-5 py-5 lg:px-6">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex items-center gap-8">
              <a
                href="#"
                className="transition hover:text-slate-600"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition hover:text-slate-600"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;