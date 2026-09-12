import bannerImage from "../assets/banner-stack.png";

interface BannerProps {
  onExplore: () => void;
}

const Banner = ({ onExplore }: BannerProps) => {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:py-14 lg:grid-cols-2 lg:px-6">
        <div>
          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
            Explore modern technologies, compare your options and create
            a development stack that fits your projects and goals.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={onExplore}
              className="brand-gradient-bg rounded-lg px-5 py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
            >
              Explore Technologies
            </button>

            <a
              href="#about"
              className="rounded-lg border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-pink-300 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;