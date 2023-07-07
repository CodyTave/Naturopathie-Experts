import { close, entreprise, particulier } from "../Assets";
import { useState, ChangeEvent, FormEvent } from "react";
import Toggle from "./Toggle";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
interface props {
  modal: boolean;
  Close?: () => void;
}

function WebinarForm({ modal, Close }: props) {
  const [isToggled, setIsToggled] = useState(false);
  const [Error, setError] = useState({ state: false, content: "" });
  const [ServerError, setServerError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSent, setSent] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  interface FormData {
    Entite: string;
    firstname: string;
    email: string;
    phone: string;
  }
  const [formData, setFormData] = useState<FormData>({
    Entite: "",
    firstname: "",
    email: "",
    phone: "",
  });
  const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setError({ state: false, content: "" });
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      Entite: isToggled ? "Entreprise" : "Particulier",
      [name]: value,
    }));
  };
  const handleSubmit = (e: FormEvent) => {
    setServerError(false);
    e.preventDefault();
    if (!formData.firstname || !formData.email || !formData.phone) {
      setError({
        state: true,
        content:
          "Veuillez remplir tous les champs du formulaire, s'il vous plait !",
      });
      return;
    }
    if (!emailValidationRegex.test(formData.email)) {
      setError({ state: true, content: "Veuillez saisir un Email valide" });
      return;
    }
    setLoading(true);
    const data = {
      properties: {
        entite: formData.Entite,
        webinar: "Oui",
        firstname: formData.firstname,
        email: formData.email,
        phone: formData.phone,
      },
    };
    axios
      .post("https://naturopathieexperts.com/form.php", data)
      .then(() => {
        setLoading(false);
        setSent(true);
        setFormData({
          Entite: "",
          firstname: "",
          email: "",
          phone: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        setServerError(true);
        console.error(error);
      });
  };

  return (
    <div className={`CommonLayout `}>
      {modal === true && (
        <img
          onClick={Close}
          src={close}
          className="w-4 absolute right-8 top-5 hover:opacity-80 cursor-pointer"
        />
      )}

      <div className={`grid sm:w-[355px] mx-auto  `}>
        <h1 className="text-2xl text-leaf-0 font-bold my-5">
          Fromulaire Du Webinar
        </h1>
        <div className={`flex justify-center ${!modal && "mt-10"} gap-8`}>
          <div className="flex gap-3 items-center ">
            <img className="w-4" src={particulier} />
            <h1 className="text-leaf-0 font-semibold">Particulier</h1>
          </div>
          <div>
            <Toggle handleClick={handleClick} isToggled={isToggled} />
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="text-leaf-0 font-semibold">Entreprise</h1>
            <img className="w-4" src={entreprise} />
          </div>
        </div>

        <div className="flex flex-col w-full justify-start gap-4 mt-3">
          <label className="text-left pl-1 text-leaf-0 font-bold ">
            Nom et Prénom :
          </label>
          <input
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Saisir votre nom"
            className=" w-full bg-leaf-2 p-3 px-7 rounded-2xl outline-none text-leaf-0 font-semibold"
          />
          <label className="text-left pl-1 text-leaf-0 font-bold ">
            Email :
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Saisir votre Email"
            className=" w-full bg-leaf-2 p-3 px-7 rounded-2xl outline-none text-leaf-0 font-semibold"
          />
          <label className="text-left pl-1 text-leaf-0 font-bold ">
            Téléphone :
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Saisir votre Numéro de téle"
            className=" w-full bg-leaf-2 p-3 px-7 rounded-2xl outline-none text-leaf-0 font-semibold"
          />
          <button
            disabled={isSent && true}
            onClick={handleSubmit}
            className={`mt-5 text-light-0 ${
              isSent ? "bg-earth-0" : "bg-leaf-0"
            } hover:bg-earth-0 transall p-3 rounded-2xl`}
          >
            {isLoading ? (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : isSent ? (
              <div>Bien Reçu</div>
            ) : (
              "Envoyer"
            )}
          </button>
          <AnimatePresence>
            {Error.state && (
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="text-earth-0 font-bold mt-5"
              >
                {Error.content}
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {ServerError && (
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="text-red-800 font-bold mt-5"
              >
                Désolé, une erreur s'est produite. Veuillez réessayer
                ultérieurement.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default WebinarForm;
