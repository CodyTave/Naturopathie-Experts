import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { descriptionLists } from "../Constants/constants";
import { dropdown, leaf } from "../Assets";
const DetailsLists = () => {
  interface listHolder {
    id: number;
    title: string;
    list: Array<string>;
  }
  const [displayedList, setDisplayed] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [listItems, setListItems] = useState<listHolder[]>([]);
  useEffect(() => {
    const updatedList = descriptionLists.filter(
      (_, index) => index !== displayedList - 1
    );
    setListItems(updatedList);
  }, []);
  useEffect(() => {
    const updatedList = descriptionLists.filter(
      (_, index) => index !== displayedList - 1
    );
    setListItems(updatedList);
  }, [displayedList]);

  return (
    <div className="transall CommonLayout">
      <div className="mb-16">
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className="flex text-3xl font-bold text-earth-0 justify-center justify-items-center gap-3 cursor-pointer"
        >
          {descriptionLists[displayedList - 1].title}
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: toggle ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5"
            src={dropdown}
          />
        </div>
        <AnimatePresence>
          {toggle && (
            <div className="mt-5 grid gap-1">
              {listItems.map((item, index) => (
                <motion.h1
                  onClick={() => {
                    setDisplayed(item.id);
                    setToggle(false);
                  }}
                  key={item.id}
                  initial={{ y: "-80%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-80%", opacity: 0 }}
                  transition={{ duration: "0.3", delay: index * 0.05 }}
                  className="text-xl text-leaf-0 font-semibold cursor-pointer transall hover:tracking-wider"
                >
                  {item.title}
                </motion.h1>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {descriptionLists[displayedList - 1].list.length !== 0 && (
          <div className="grid sm:grid-cols-2 text-left gap-5 w-[80%] h-[200px] overflow-auto sm:mx-0 mx-auto sm:ml-auto">
            {descriptionLists[displayedList - 1].list.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: "-80%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-80%", opacity: 0 }}
                transition={{ duration: "0.3", delay: index * 0.05 }}
                className="flex gap-3 transall "
              >
                <img className="w-4" src={leaf} />
                <h1 className="text-leaf-0 font-medium my-auto">{item}</h1>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DetailsLists;
