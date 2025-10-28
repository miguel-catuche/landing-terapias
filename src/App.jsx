import Header from './components/header'
import About from './components/About'
import Services from './components/Services'
import ScheduleLocation from './components/ScheduleLocation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <ScheduleLocation/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </>
  )
}

export default App
