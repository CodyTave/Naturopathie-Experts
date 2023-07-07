import { logo } from "../Assets";
import ModalPop from "./ModalPop";

interface props {
  setScroll: (arg: boolean) => void;
  setOpen: (arg: boolean) => void;
  openModal: boolean;
}

function FirstReminder({ setScroll, setOpen, openModal }: props) {
  return (
    <>
      <div className="mt-28 CommonLayout">
        <div className=" xl:w-[30%] md:w-[50%] sm:w-[60%] mx-auto">
          <img className="mx-auto" src={logo} />
          <button
            onClick={() => setOpen(true)}
            className="mt-5 w-full py-2 rounded-3xl hover:bg-earth-0 bg-leaf-0 font-bold text-light-0 transall"
          >
            S'inscrire Maintenant
          </button>
        </div>
      </div>
      <ModalPop
        forWebinar={false}
        openModal={openModal}
        setScroll={setScroll}
        setOpen={setOpen}
      />
    </>
  );
}

export default FirstReminder;
