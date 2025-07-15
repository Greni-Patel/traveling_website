import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import Logos from "./components/Logs";
import SubscribeSection from './components/SubscribeSection';
import Footer from "./components/Footer";
import TripSteps from "./components/TripSteps";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <TripSteps />
      <Testimonials />
      <Logos />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;
