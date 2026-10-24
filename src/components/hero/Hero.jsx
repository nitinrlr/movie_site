import "./Hero.css";
import {useState} from "react";
import HeroSlide from "../hero-slide/HeroSlide";
import jparkHero from "./images/jpark-hero.webp";
import duneHero from "./images/dune-hero.png";
import avengersHero from "./images/avengers-hero.png";

const Hero = () => {
    // which slide is showing: 0, 1 or 2
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        if (current === 2) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    };

    const prevSlide = () => {
        if (current === 0) {
            setCurrent(2);
        } else {
            setCurrent(current - 1);
        }
    };

    return (
        <section className="hero">
            <button className="hero-arrow hero-arrow-prev" aria-label="Previous slide" onClick={prevSlide}>&#8249;</button>
            <HeroSlide
                image={jparkHero}
                title="Jurassic Park"
                description="An island of prehistoric dinosaurs becomes a fight for survival when the park's attractions escape their enclosures. Every step brings new danger, leaving one question. Who will make it out alive?"
                rating="9.0"
                link="/movie"
                linkText="Details"
                hidden={current !== 0}
            />
            <HeroSlide
                image={duneHero}
                title="Dune: Part Two"
                description="Paul Atreides unites with the Fremen to fight back against the empire that destroyed his family, while visions of a dark future push him toward a choice that could change the desert forever."
                rating="8.0"
                link="/browse"
                linkText="More Sci-Fi"
                hidden={current !== 1}
            />
            <HeroSlide
                image={avengersHero}
                title="The Avengers"
                description="Earth's mightiest heroes are brought together for the first time to stop Loki and his alien army from taking over the planet, if they can learn to work as a team before it is too late."
                rating="9.2"
                link="/browse"
                linkText="More Action"
                hidden={current !== 2}
            />
            <button className="hero-arrow hero-arrow-next" aria-label="Next slide" onClick={nextSlide}>&#8250;</button>
            <div className="hero-dots">
                <span className={current === 0 ? "dot active" : "dot"}></span>
                <span className={current === 1 ? "dot active" : "dot"}></span>
                <span className={current === 2 ? "dot active" : "dot"}></span>
            </div>
        </section>
    );
};

export default Hero;
