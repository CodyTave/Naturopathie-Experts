import { close, entreprise, particulier } from "../Assets";
import Toggle from "./Toggle";
import { useState, ChangeEvent, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
interface props {
  modal: boolean;
  Close?: () => void;
}

function Form({ modal, Close }: props) {
  const [isToggled, setIsToggled] = useState(false);
  const [Error, setError] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  interface FormData {
    Entite: string;
    nomPrenom: string;
    email: string;
    telephone: string;
    ville: string;
  }
  const [formData, setFormData] = useState<FormData>({
    Entite: "",
    nomPrenom: "",
    email: "",
    telephone: "",
    ville: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setError(false);
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      Entite: isToggled ? "Entreprise" : "Particulier",
      [name]: value,
    }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !formData.nomPrenom ||
      !formData.email ||
      !formData.telephone ||
      !formData.ville
    ) {
      setError(true);
      console.log("Please fill in all the required fields");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="CommonLayout overflow-auto">
      {modal === true && (
        <img
          onClick={Close}
          src={close}
          className="w-4 absolute right-8 top-5 hover:opacity-80 cursor-pointer"
        />
      )}

      {!modal && (
        <h1 className="text-3xl text-leaf-0 font-bold">
          Formulaire de pré-inscription
        </h1>
      )}
      <div className="grid sm:w-[355px] mx-auto">
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
            name="nomPrenom"
            value={formData.nomPrenom}
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
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            type="tel"
            placeholder="Saisir votre Numéro de téle"
            className=" w-full bg-leaf-2 p-3 px-7 rounded-2xl outline-none text-leaf-0 font-semibold"
          />
          <label className="text-left pl-1 text-leaf-0 font-bold ">
            Ville :
          </label>
          <select
            name="ville"
            onChange={handleChange}
            placeholder="Saisir votre Ville"
            value={formData.ville}
            className=" w-full bg-leaf-2 p-3 px-7 rounded-2xl outline-none text-leaf-0 font-semibold"
          >
            <option selected>Choisir Votre Ville</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Rabat">Rabat</option>
            <option value="Paris">Paris</option>
          </select>
          <button
            onClick={handleSubmit}
            className="mt-5 text-light-0 bg-leaf-0 hover:bg-earth-0 transall p-3 rounded-2xl"
          >
            Envoyer
          </button>
          <AnimatePresence>
            {Error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="text-earth-0 font-bold mt-5"
              >
                Remplire le Formulaire SVP !
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Form;
