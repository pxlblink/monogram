import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import ProductSection1 from "./pages/ProductSection1.jsx";
import ProductSection2 from "./pages/ProductSection2.jsx";
import MiddleBanner from "./components/MiddleBanner.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductSection1 />
      <MiddleBanner />
      <ProductSection2 />
      <Footer />
    </>
  );
}

export default App;
