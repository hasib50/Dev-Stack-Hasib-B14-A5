import type { Technology } from "../../types";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isSelected: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isSelected,
}: TechnologyCardProps) => {
  return (
    <div
      className={`
        flex h-full flex-col rounded-xl
        bg-white p-4 shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_10px_25px_rgba(15,23,42,0.10)]
        ${
          isSelected
            ? "cursor-not-allowed border-2 border-pink-400"
            : "border border-slate-100"
        }
      `}
    >
      {/* Icon & Badge */}
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <span
          className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${
            technology.badgeColor
          }`}
        >
          {technology.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-3">
        <h3 className="text-[16px] font-semibold text-slate-900">
          {technology.name}
        </h3>

        <p className="mt-2 min-h-[54px] text-xs font-normal leading-5 text-slate-400">
          {technology.description}
        </p>
      </div>

      {/* Info, Category, Difficulty and Rating */}
      
      <div className="mt-3 flex min-h-[28px] items-center gap-3">
        
        <span className="rounded-md bg-slate-50 px-2.5 py-1.5 text-[9px] font-medium text-slate-500">
          {technology.category}
        </span>

        
        <span className="text-[9px] font-medium text-slate-500">
          {technology.difficulty}
        </span>

        
        <span className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-slate-600">
          <span className="text-[12px] text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isSelected}
        className={`mt-auto w-full rounded-lg px-3 py-2.5 text-[11px] font-semibold transition-all duration-300 ${
          isSelected
            ? "cursor-not-allowed bg-pink-50 text-pink-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isSelected ? (
          <>
            <span className="mr-1 text-pink-500">✓</span>
            <span className="text-pink-500">Added to Stack</span>
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechnologyCard;