import { NavBar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/page/Home";

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
