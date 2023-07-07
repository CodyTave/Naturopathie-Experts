import { elementsList } from "../Constants/constants";
import { useState } from "react";
function RandomLayoutList() {
  const [Hovered, setHovered] = useState(-1);
  function handleHover(i: number) {
    setHovered(i);
  }
  return (
    <div className="CommonLayout mb-16">
      <h1 className="text-3xl font-bold text-earth-0 transall hover:tracking-widest my-20">
        Cette formation couvre notamment des connaissances sur les éléments suivants :
      </h1>
      <div className="w-[80%] h-[500px] mx-auto relative">
        {elementsList.map((ele, i) => (
          <h1
            key={i}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => handleHover(-1)}
            className={`lmd:absolute lmd:my-0 my-3 font-bold hover:mr-3 hover:tracking-wider text-leaf-0
             transall cursor-pointer lmd:translate-x-1/3 lmd:translate-y-1/2 
             ${ele.postion} ${ele.size} 
             ${
               Hovered === -1
                 ? ele.blur
                 : Hovered === i
                 ? "lmd:blur-[0px]"
                 : "lmd:blur-[4px]"
             }
             `}
          >
            {ele.title}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default RandomLayoutList;
