import Form from "./Form";
import WebinarForm from "./WebinarForm";
interface props {
  setScroll: (arg: boolean) => void;
  setOpen: (arg: boolean) => void;
  openModal: boolean;
  forWebinar: boolean;
}

function ModalPop({ setScroll, setOpen, openModal, forWebinar }: props) {
  return (
    <>
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
              {forWebinar ? (
                <WebinarForm
                  modal={true}
                  Close={() => {
                    setOpen(false);
                    setScroll(true);
                  }}
                />
              ) : (
                <Form
                  modal={true}
                  Close={() => {
                    setOpen(false);
                    setScroll(true);
                  }}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ModalPop;
