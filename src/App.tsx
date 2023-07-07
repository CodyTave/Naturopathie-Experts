import "./App.css";
import { useState } from "react";
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
import Webinar from "./Components/Webinar";
function App() {
  const [openModal, setOpen] = useState(false);
  const [openWebinarModal, setWebinarOpen] = useState(false);
  function setScroll(arg: boolean) {
    if (arg) {
      document.body.style.overflowY = "scroll";
    }
    if (!arg) {
      document.body.style.overflowY = "hidden";
    }
  }
  function handleModal(arg: boolean) {
    setOpen(arg);
  }
  function handleWebinarModal(arg: boolean) {
    setWebinarOpen(arg);
  }
  return (
    <>
      <div className="grid gap-20 transall">
        <Navbar />
        <Hero
          openModal={openModal}
          setScroll={setScroll}
          setOpen={handleModal}
        />
        <BasesSection />
        <RandomLayoutList />
        <DetailsLists />
        <FirstReminder
          openModal={openModal}
          setScroll={setScroll}
          setOpen={handleModal}
        />
        <DetailsCarousel />
        <Webinar
          openModal={openWebinarModal}
          setScroll={setScroll}
          setOpen={handleWebinarModal}
        />
        <About />
        <SecondReminder
          openModal={openModal}
          setScroll={setScroll}
          setOpen={handleModal}
        />
        <Form modal={false} />
        <Footer />
        <Modal
          openModal={openModal}
          setScroll={setScroll}
          setOpen={handleModal}
        />
      </div>
    </>
  );
}

export default App;
