import { poweredBy } from "../Assets";
import ModalPop from "./ModalPop";
interface props {
  setScroll: (arg: boolean) => void;
  setOpen: (arg: boolean) => void;
  openModal: boolean;
}

function SecondReminder({ setScroll, setOpen, openModal }: props) {
  return (
    <>
      <div className="CommonLayout mb-20">
        <div className="grid xl:w-[30%] md:w-[50%] sm:w-[60%] mx-auto">
          <h1 className="text-earth-0 text-3xl stroke-text font-bold">
            Qu'est-ce que vous attendez ?
          </h1>
          <button
            onClick={() => setOpen(true)}
            className="mt-5 w-full py-2 rounded-3xl hover:bg-earth-0 bg-leaf-0 font-bold text-light-0 transall"
          >
            S'inscrire Maintenant
          </button>
          <a
            className="pt-5 w-32 mx-auto"
            target="_blank"
            href="https://catalogue-coachingbox.dendreo.com/formation/9/naturopathie-et-plantes-medicinales"
          >
            <img src={poweredBy} />
          </a>
        </div>

        <ModalPop
          forWebinar={false}
          openModal={openModal}
          setScroll={setScroll}
          setOpen={setOpen}
        />
      </div>
    </>
  );
}

export default SecondReminder;
