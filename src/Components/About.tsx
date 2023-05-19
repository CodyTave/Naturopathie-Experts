import { plant7 } from "../Assets";

function About() {
  return (
    <div className="CommonLayout md:w-[70%] mx-auto" id="about">
      <div className="flex mx-auto justify-center">
        <div className="grid sm:w-[70%] text-left">
          <h1 className="text-5xl font-bold text-leaf-0 mb-5">ABOUT US</h1>
          <p className="text-leaf-0 text-lg">
            Fondé par des managers et formateurs au sein d'entreprises et
            organisations internationales de renom , notre équipe met à profit
            son expérience et son savoir-faire méthodologique au service de la
            Formation d'Excellence dans ce domaine. Notre établissement et nos
            équipes sont engagés pour une Qualité et une Ethique exemplaire.
            Notre approche s'appuie sur les innovations pédagogiques et la
            pratique professionnel dans le domaine de la naturopathie
          </p>
        </div>
        <div className="hidden lg:flex">
          <img className=" w-36 " src={plant7} />
        </div>
      </div>
    </div>
  );
}

export default About;
