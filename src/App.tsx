import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
};

export default App;