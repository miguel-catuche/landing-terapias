import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import ScheduleLocation from './components/ScheduleLocation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import WhatsAppButton from './components/WhatsAppButton'
import ThemeSelector from './components/ThemeSelector'
import FacilitySection from './components/FacilitySection'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <ThemeSelector/>
      <HeroSection/>
      <About/>
      <Services/>
      <ScheduleLocation/>
      <FacilitySection/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </>
  )
}

export default App
