import type { Technology } from "../../types";


interface AvailableTechnologiesProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  onAdd: (technology: Technology) => void;
}

const AvailableTechnologies = ({
  technologies,
  selectedTechnologies,
  onAdd,
}: AvailableTechnologiesProps) => {
  return (
    <section id="technologies">
      <div className="mb-5">
       <h2 className="text-4xl font-bold tracking-tight text-slate-900">
  Explore the{" "}
  <span className="technologies-gradient">Technologies</span>
</h2>

<p className="mt-2 text-sm text-slate-400">
  Pick one technology per category to build your ideal stack.
</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
            isSelected={selectedTechnologies.some(
              (item) => item.id === technology.id
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default AvailableTechnologies;