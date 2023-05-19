import { logo } from "../Assets";
function FirstReminder() {
  return (
    <div className="mt-28 CommonLayout">
      <div className=" xl:w-[30%] md:w-[50%] sm:w-[60%] mx-auto">
        <img className="mx-auto" src={logo} />
        <button className="mt-5 w-full py-2 rounded-3xl hover:bg-earth-0 bg-leaf-0 font-bold text-light-0 transall">
          S'inscrire Maintenant
        </button>
      </div>
    </div>
  );
}

export default FirstReminder;
