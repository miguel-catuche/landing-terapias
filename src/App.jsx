import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import ScheduleLocation from './components/ScheduleLocation';
import FacilitySection from './components/FacilitySection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="schedule">
          <ScheduleLocation />
        </section>

        <section id="facility">
          <FacilitySection />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>

      <WhatsAppButton />
    </>
  );
}

export default App;
