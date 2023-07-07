import Card from "./Card";
import { Cards } from "../Constants/constants";
function BasesSection() {
  return (
    <div className="CommonLayout" id="programmeformation">
     
      <h2 className="text-3xl font-bold text-earth-0 transall hover:tracking-widest mb-20">
        Programme de la formation
      </h2>
      <h3 className="text-2xl font-bold text-leaf-0 transall hover:tracking-widest mb-20">
        BASES SCIENTIFIQUES DE LA DIETETIQUE
      </h3>
      <div className="grid gap-y-10 grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
        {Cards.map((card) => (
          <div key={card.id}>
            <Card
              text={card.text}
              image={card.img}
              color={card.color}
              selection={card.selection}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasesSection;
