import { Next } from "../Assets";
import { useState } from "react";
import { CarouselCards } from "../Constants/constants";
CarouselCards;
function DetailsCarousel() {
  const [card, setCard] = useState(2);
  return (
    <div className=" bg-leaf-0 p-10 CommonLayout transall">
      <div className=" ">
        <h1 className="mt-10 text-3xl font-bold text-light-0">
          {CarouselCards[card].title}
        </h1>
        <div className="flex gap-10 items-center justify-center">
          <button
            className="disabled:opacity-25 w-4"
            disabled={card === 0 && true}
            onClick={() => {
              setCard(card - 1);
            }}
          >
            <img className="rotate-180" src={Next} />
          </button>
          <div className="grid mt-16 mb-24 xl:h-[370px] w-full bg-light-0 lg:w-[60%] rounded-3xl relative">
            <img
              className="absolute -left-5 -bottom-6 w-52 opacity-25 md:opacity-100 transall"
              src={CarouselCards[card].plant}
            />
            <p
              className={`p-10 sm:p-20 ml-auto text-leaf-0 my-auto ${CarouselCards[card].size} `}
            >
              {CarouselCards[card].text}
            </p>
          </div>
          <button
            className="disabled:opacity-25 w-4"
            disabled={card === CarouselCards.length - 1 && true}
            onClick={() => {
              setCard(card + 1);
            }}
          >
            <img className="" src={Next} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsCarousel;
