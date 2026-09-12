import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import AvailableTechnologies from "./components/technology/AvailableTechnologies";
import Stack from "./components/technology/Stack";
import type { Technology } from "./types";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Fetch Technology
  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies.");
        setLoading(false);
      });
  }, []);

  // Add technology 
  const handleAddToStack = (technology: Technology) => {
    if (
      selectedTechnologies.some(
        (item) => item.id === technology.id
      )
    ) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove technology
  const handleRemove = (id: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack.");
  };

  // Scroll to technologies
  const handleExplore = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <Banner onExplore={handleExplore} />

      <main className="mx-auto max-w-6xl px-5 py-12 lg:px-6">
        {loading ? (
  // Spinner
          
          <div className="flex min-h-96 items-center justify-center">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
          </div>
        ) : (
  // Technologies + Stack
        
        <div className="grid gap-7 lg:grid-cols-[1fr_280px]">
            <AvailableTechnologies
              technologies={technologies}
              selectedTechnologies={selectedTechnologies}
              onAdd={handleAddToStack}
            />

            <div className="lg:mt-19.75">
              <Stack
                selectedTechnologies={selectedTechnologies}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default App;