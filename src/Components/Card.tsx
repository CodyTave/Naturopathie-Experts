interface props {
  text: string;
  image: string;
  color: string;
  selection: string;
}
import { splitParagraph } from "../Constants/Reusables";
import { useState } from "react";
function Card({ text, image, color, selection }: props) {
  const [fw, p] = splitParagraph(text);
  const [textSize, settextSize] = useState("");
  return (
    <div
      onMouseEnter={() => {
        settextSize("md:w-10/12");
      }}
      onMouseLeave={() => {
        settextSize("");
      }}
      className={`${color} transall hover:md:w-[500px] sm:w-[400px] sm:h-[300px] ${selection} text-light-0 p-7 rounded-3xl relative`}
    >
      <p className={`text-left w-11/12 ${textSize} text-lg`}>
        <span className="text-2xl font-bold">{fw}</span> {p}
      </p>
      <img className="absolute -right-10 w-40 top-7" src={image} />
    </div>
  );
}

export default Card;
