
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import Products from "./components/Products";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />  
      <Products />     
      {/* <Item /> */}
      <Footer />
    </div>
  );
}

export default App;
