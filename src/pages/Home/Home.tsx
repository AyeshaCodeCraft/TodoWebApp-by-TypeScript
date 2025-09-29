





import Navbar from "../../components/Navbar/Navbar";
import Hero from "./sections/Hero";
import FlashSales from "./sections/FlashSales";
import Arrivals from "./sections/Arrivals";
import Services from "./sections/Services";
import Browse from "./sections/Browse";
 import Products from "./sections/Products";
import Categories from "./sections/Categories";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* All homepage sections */}
      <main>
        <Hero />
         <FlashSales/> 
         <Browse/> 
         <Products/> 
        <Categories />  
        <Arrivals />  
        <Services />  
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
