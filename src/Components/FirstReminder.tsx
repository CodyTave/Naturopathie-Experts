import { Link } from "react-scroll";
import { logo } from "../Assets";
function FirstReminder() {
  return (
    <div className="mt-28 CommonLayout">
      <div className=" xl:w-[30%] md:w-[50%] sm:w-[60%] mx-auto">
        <img className="mx-auto" src={logo} />
        <button className="mt-5 w-full py-2 rounded-3xl hover:bg-earth-0 bg-leaf-0 font-bold text-light-0 transall">
          <Link
            to="s'inscrire"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            S'inscrire Maintenant
          </Link>
        </button>
      </div>
    </div>
  );
}

export default FirstReminder;
