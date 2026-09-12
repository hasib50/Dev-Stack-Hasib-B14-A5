import Nav from "./components/Nav";
import Banner from "./components/Banner";

const App = () => {
  const handleExplore = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Banner onExplore={handleExplore} />
    </div>
  );
};

export default App;