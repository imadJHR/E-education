import Banner from "./components/Banner"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Service from "./components/Service"
import Subscribe from "./components/Subscribe"
import Banner2 from "./components/Banner2"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">

      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
      <Subscribe/>
      <Banner2/>
      <Footer/>
    </main>
  )
}

export default App