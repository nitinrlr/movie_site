import "./Hero.css";
import HeroSlide from "../hero-slide/HeroSlide";
import jparkHero from "./images/jpark-hero.webp";
import duneHero from "./images/dune-hero.png";
import avengersHero from "./images/avengers-hero.png";

const Hero = () => {
    return (
        <section className="hero">
            <button className="hero-arrow hero-arrow-prev" aria-label="Previous slide">&#8249;</button>
            <HeroSlide
                image={jparkHero}
                title="Jurassic Park"
                description="An island of prehistoric dinosaurs becomes a fight for survival when the park's attractions escape their enclosures. Every step brings new danger, leaving one question. Who will make it out alive?"
                rating="9.0"
                link="/movie"
                linkText="Details"
            />
            <HeroSlide
                image={duneHero}
                title="Dune: Part Two"
                description="Paul Atreides unites with the Fremen to fight back against the empire that destroyed his family, while visions of a dark future push him toward a choice that could change the desert forever."
                rating="8.0"
                link="/browse"
                linkText="More Sci-Fi"
                hidden={true}
            />
            <HeroSlide
                image={avengersHero}
                title="The Avengers"
                description="Earth's mightiest heroes are brought together for the first time to stop Loki and his alien army from taking over the planet, if they can learn to work as a team before it is too late."
                rating="9.2"
                link="/browse"
                linkText="More Action"
                hidden={true}
            />
            <button className="hero-arrow hero-arrow-next" aria-label="Next slide">&#8250;</button>
            <div className="hero-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </section>
    );
};

export default Hero;
