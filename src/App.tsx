import "./App.css";
import BasesSection from "./Components/BasesSection";
import DetailsCarousel from "./Components/DetailsCarousel";
import DetailsLists from "./Components/DetailsLists";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import RandomLayoutList from "./Components/RandomLayoutList";
import FirstReminder from "./Components/FirstReminder";
import SecondReminder from "./Components/SecondReminder";
import About from "./Components/About";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
function App() {
  return (
    <>
      <div className="grid gap-20 transall">
        <Navbar />
        <Hero />
        <BasesSection />
        <RandomLayoutList />
        <DetailsLists />
        <FirstReminder />
        <DetailsCarousel />
        <SecondReminder />
        <About />
        <Form modal={false} />
        <Footer />
        <Modal />
      </div>
    </>
  );
}

export default App;
