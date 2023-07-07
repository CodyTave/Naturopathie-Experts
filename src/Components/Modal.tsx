import { modalButton } from "../Assets";
import ModalPop from "./ModalPop";
interface props {
  setScroll: (arg: boolean) => void;
  setOpen: (arg: boolean) => void;
  openModal: boolean;
}
function Modal({ setScroll, setOpen, openModal }: props) {
  return (
    <>
      <div className="fixed bottom-8 right-8 ">
        <div
          onClick={() => {
            setOpen(true);
            setScroll(false);
          }}
          className="bg-leaf-0 p-4 rounded-full modal cursor-pointer hover:bg-earth-0 transall"
        >
          <img className="" src={modalButton} />
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

export default Modal;
