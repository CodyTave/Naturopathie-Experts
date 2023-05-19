import { modalButton } from "../Assets";
import { useState, useEffect } from "react";
import Form from "./Form";
function Modal() {
  const [openModal, setOpen] = useState(false);
  useEffect(() => {
    const initialOverflow = document.body.style.overflow;

    document.body.style.overflow = openModal ? "hidden" : initialOverflow;

    return () => {
      document.body.style.overflowY = initialOverflow;
    };
  }, [openModal]);

  return (
    <>
      <div className="fixed bottom-8 right-8">
        <div
          onClick={() => setOpen(true)}
          className="bg-leaf-0 p-4 rounded-full modal cursor-pointer hover:bg-earth-0 transall"
        >
          <img className="" src={modalButton} />
        </div>
      </div>
      {openModal && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed w-full h-full bg-dark-0 opacity-80 cursor-pointer "
          />
          <div className="fixed SmoothIn top-10 sm:top-28 right-1/2 translate-x-1/2 bg-light-0 py-10 rounded-3xl  ">
            <Form modal={true} Close={() => setOpen(false)} />
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
