
// import Navbarr from "./components/Navbarr";
import About from "./Components2/About";
import Footer from "../User/components/Footer"
import Home from "./Components2/Home";
import Work from "./Components2/Work";
import Contact from "./Components2/Contact";
import Navbar from "./components/Navbar";
function FeaturePage(){
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default FeaturePage