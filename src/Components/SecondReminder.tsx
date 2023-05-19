import { poweredBy } from "../Assets";

function SecondReminder() {
  return (
    <div className="CommonLayout mb-20">
      <div className="grid xl:w-[30%] md:w-[50%] sm:w-[60%] mx-auto">
        <h1 className="text-earth-0 text-3xl font-bold">
          Qu'est-ce que vous attendez ?
        </h1>
        <button className="mt-5 w-full py-2 rounded-3xl hover:bg-earth-0 bg-leaf-0 font-bold text-light-0 transall">
          S'inscrire Maintenant
        </button>
        <a
          className="pt-5 w-32 mx-auto"
          target="_blank"
          href="https://catalogue-bexfor.dendreo.com/"
        >
          <img src={poweredBy} />
        </a>
      </div>
    </div>
  );
}

export default SecondReminder;
