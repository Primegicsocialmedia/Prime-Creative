import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/*left: Hero content*/}
        <header className="flex flex-col justify-items-center md:w-full md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center gap-1 md:gap-3 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi were a team of passionate designers and developers based in
              South Africa with a passion for code and design.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>

        {/*Right: Hero content*/}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
