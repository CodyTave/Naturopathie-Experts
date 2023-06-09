import { hero } from "../Assets";
import ModalPop from "./ModalPop";
import { Link } from "react-scroll";
interface props {
  setScroll: (arg: boolean) => void;
  setOpen: (arg: boolean) => void;
  openModal: boolean;
}

function Hero({ setScroll, setOpen, openModal }: props) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 CommonLayout">
        <div className="grid gap-1 my-auto items-center text-left justify-items-start fadeInRight">
          <h1 className="font-sec text-5xl">Formez vouz en</h1>
          <div className="">
            <h1 className="grid sm:flex text-7xl font-bold text-leaf-0 drop-shadow-2xl hover:tracking-wider transall">
              Naturo
              <span className="text-earth-0 hover:tracking-wider transall">
                Pathie
              </span>
            </h1>
          </div>
          <p className="text-2xl w-3/5">
            Formez-vous aux méthodes thérapeutiques favorisant l'auto-guérison
            chez l'individu
          </p>
          <div className="grid font-semibold">
            <button
              onClick={() => setOpen(true)}
              className="mt-5 transall border-leaf-0 border-2 bg-leaf-0 text-light-0 p-2 px-6 rounded-3xl hover:bg-light-0 hover:text-leaf-0 hover:border-2"
            >
              S'inscrire Maintenant
            </button>
            <button className="mt-2 transall border-leaf-0 border-2 text-leaf-0 p-2 px-6 rounded-3xl hover:bg-leaf-0 hover:text-light-0">
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                to="programmeformation"
              >
                En savoir plus
              </Link>
            </button>
          </div>
        </div>
        <div className=" hidden md:grid fadeInleft">
          <img className="w-10/12 ml-auto my-auto" src={hero} />
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

export default Hero;
