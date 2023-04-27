
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import Item from "./components/Item";
import Navbar from "./components/Navbar";
import Products from "./components/Products";




function App() {
  return (
    <div className="scroll-smooth">    
      <Navbar />
      <div id="Hero">
      <Hero />
      </div>
      <div id="About">
      <AboutUs />
      </div>
      <div id="Products">
      <Products /> 
      </div>
      <div id="Find">   
      <Footer />
      </div>  
    </div>
  );
}

export default App;
