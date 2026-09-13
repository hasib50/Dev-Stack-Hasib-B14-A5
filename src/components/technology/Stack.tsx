import type { Technology } from "../../types";

interface StackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Stack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-1 text-xs text-slate-400">
        {selectedTechnologies.length === 0
          ? "No technologies selected yet."
          : `${selectedTechnologies.length} Technologies selected.`}
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="mt-4 flex h-16.75 items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-xs text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
        {/* Selected technologies */}
          <div className="mt-4 space-y-2">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-7 w-7 object-contain"
                  />

                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {technology.name}
                    </p>

                    <p className="text-[10px] text-slate-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-lg text-slate-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove all */}
          
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-red-200 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default Stack;