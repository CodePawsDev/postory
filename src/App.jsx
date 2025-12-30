import { NavBar } from "./shared/layout/Navbar";
import { Footer } from "./shared/layout/Footer";
import Home from "./features/articles/pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-brown-100">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
