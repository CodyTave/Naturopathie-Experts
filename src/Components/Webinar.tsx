import { logoNeutre, webinar } from "../Assets";
import ModalPop from "./ModalPop";
interface props {
  setScroll: (arg: boolean) => void;
  setOpen: (arg: boolean) => void;
  openModal: boolean;
}

function Webinar({ setScroll, setOpen, openModal }: props) {
  return (
    <div className="grid gap-10 xl:w-[30%] md:w-[50%] sm:w-[60%] w-[90%] mx-auto my-20">
      <div className="relative">
        <img src={logoNeutre} />
        <h1 className="text-7xl font-bold textStroke mt-5">Webinar</h1>
        <h1 className="font-sec text-6xl text-red-800 absolute -bottom-7 right-20">
          Gratuit
        </h1>
      </div>
      <img className="w-3/4 mx-auto" src={webinar} />
      <div></div>
      <h1 className="text-earth-1 text-2xl font-semibold">
        Inscrivez-vous dès maintenant au Webinar gratuit sur la naturopathie !
      </h1>
      <p className="text-leaf-0 text-xl font-semibold">
        Rejoignez notre Webinar gratuit et découvrez les secrets de la
        naturopathie et des plantes médicinales pour une santé optimale.
        Inscrivez-vous avant la date limite et ne manquez pas cette opportunité
        unique !
      </p>
      <button
        onClick={() => setOpen(true)}
        className=" w-full text-xl py-2 rounded-3xl hover:bg-earth-0 bg-leaf-0 font-bold text-light-0 transall"
      >
        Réserver Une Place
      </button>
      <ModalPop
        forWebinar={true}
        openModal={openModal}
        setScroll={setScroll}
        setOpen={setOpen}
      />
    </div>
  );
}

export default Webinar;
