import './App.css';
import AboutEscobarDuque from './components/AboutEscobar';
import Asistencias from './components/Asistencias';
import FixedLinesBackground from './components/BackGround';
import BackgroundFixed from './components/BackGround';
import Blog from './components/blog';
import EscobarDuqueHero from './components/Confianza';
import Cotizacion from './components/Cotizacion';
import FaqSection from './components/FAQs';
import PartnersSection from './components/Fiabilidad';
import Footer from './components/Footer';
import HeroProfesional from './components/HeroProfesional';
import Navbar from './components/NavBar';
import PolizasIntro from './components/Polizas';
import TelemedicinaHeroSection from './components/SectionVideo';
function App() {
  return (
    <>
      <BackgroundFixed />
      <Navbar />
      <Cotizacion />
      <PolizasIntro />
      <Asistencias />
      <TelemedicinaHeroSection />
      <FixedLinesBackground />
      <EscobarDuqueHero />
      <AboutEscobarDuque />
      <PartnersSection />
      <HeroProfesional />
      <FaqSection />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
