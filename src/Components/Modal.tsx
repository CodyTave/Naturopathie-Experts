import { modalButton } from "../Assets";
import { useState } from "react";
import Form from "./Form";
function Modal() {
  const [openModal, setOpen] = useState(false);
  function setScroll(arg: boolean) {
    if (arg) {
      document.body.style.overflowY = "scroll";
    }
    if (!arg) {
      document.body.style.overflowY = "hidden";
    }
  }
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
      {openModal && (
        <>
          <div className="fixed flex items-center justify-center inset-0 SmoothIn overflow-auto  ">
            <div
              onClick={() => {
                setOpen(false);
                setScroll(true);
              }}
              className="fixed inset-0 bg-dark-0 opacity-80 cursor-pointer "
            />

            <div className="bg-light-0 py-10 z-50 rounded-3xl relative ">
              <Form
                modal={true}
                Close={() => {
                  setOpen(false);
                  setScroll(true);
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
