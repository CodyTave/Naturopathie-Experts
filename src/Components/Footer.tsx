import { wLogo } from "../Assets";

function Footer() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center bg-dark-0 p-20">
      <img className="sm:w-1/3" src={wLogo} />
      <div className="text-light-0 text-sm font-semibold">
        © COPYRIGHT 2023 , <a href="https://bexfor.fr/">Bexfor</a> - TOUS LES DROITS SONT RÉSERVÉS.
      </div>
    </div>
  );
}

export default Footer;
