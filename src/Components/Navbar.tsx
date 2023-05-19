import { logo } from "../Assets";
import { Navlinks } from "../Constants/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavToggle from "./NavToggle";
function Navbar() {
  const [toggled, setToggle] = useState(false);
  return (
    <nav className="CommonLayout pt-8">
      <div className="flex justify-between">
        <div className="cursor-pointer">
          <img className="w-44" src={logo} />
        </div>
        <div className="hidden md:flex gap-20">
          {Navlinks.map((link, index) => (
            <div
              className={`cursor-pointer font-semibold hover:text-leaf-0 SmoothIn
               hover:${link.id !== "home" && "pl-5"} transall`}
              key={index}
            >
              {link.title}
            </div>
          ))}
        </div>
        <div
          onClick={() => {
            setToggle(!toggled);
          }}
          className="flex md:hidden SmoothIn cursor-pointer my-auto"
        >
          <NavToggle toggled={toggled} />
        </div>
      </div>
      <AnimatePresence>
        {toggled && (
          <div className="grid md:hidden">
            {Navlinks.map((link) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`cursor-pointer text-xl font-semibold hover:text-leaf-0  mt-10 hover:pl-5
           transall`}
                key={link.id}
              >
                {link.title}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
