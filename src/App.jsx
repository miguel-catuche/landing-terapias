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
import { useLazyVisibility } from './hooks/LazySection'
import './App.css'
function App() {
  const about = useLazyVisibility();
  const services = useLazyVisibility();
  const schedule = useLazyVisibility();
  const facility = useLazyVisibility();
  const contact = useLazyVisibility();

  return (
    <>
      <Header />
      <ThemeSelector />
      <HeroSection />

      <div ref={about.ref}>{about.visible && <About />}</div>
      <div ref={services.ref}>{services.visible && <Services />}</div>
      <div ref={schedule.ref}>{schedule.visible && <ScheduleLocation />}</div>
      <div ref={facility.ref}>{facility.visible && <FacilitySection />}</div>
      <div ref={contact.ref}>{contact.visible && <Contact />}</div>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;