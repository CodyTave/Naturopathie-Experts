import { plant7 } from "../Assets";

function About() {
  return (
    <div className="CommonLayout md:w-[70%] mx-auto" id="apropos">
      <div className="flex mx-auto justify-center">
        <div className="grid sm:w-[70%] text-left">
          <h1 className="text-5xl font-bold text-leaf-0 mb-5">A propos de nous</h1>
          <p className="text-leaf-0 text-lg">
            <a href="https://coaching-box.com/">Bexfor</a> est un institut international de conseil, de formation d'excellence et de naturopathie. Fondé par des managers expérimentés issus d'entreprises renommées, nous mettons notre savoir-faire méthodologique au service de formations variées. Notre établissement s'engage envers la qualité, l'éthique et dispose d'une équipe solide aux compétences avérées. Avec un réseau de collaboration mondial, nous sommes votre partenaire idéal pour renforcer vos capacités professionnelles, y compris dans le domaine de la naturopathie.
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
