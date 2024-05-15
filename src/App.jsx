import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Clients from "./components/Clients"
import Footer from "./components/Footer"
import WhyChooseUs from "./components/WhyChooseUs"
import FocusBase from "./components/FocusBase"
import FunFacts from "./components/FunFacts"

function App() {

  return (
    <>
      <Navbar/>
      <Header />
      <FunFacts/>
      <AboutUs/>
      <FocusBase/>
      <Services/>
      <WhyChooseUs/>
      <Clients/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
