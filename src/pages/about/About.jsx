import "./About.css";
import {Link} from "react-router-dom";
import MissionCard from "../../components/mission-card/MissionCard";
import Stat from "../../components/stat/Stat";

const About = () => {
    return (
        <div className="about">
            <section className="about-hero">
                <h1 className="page-title">Who We Are</h1>
                <p>
                    A community built for movie buffs, by movie buffs. We breathe cinema and exist
                    to connect millions through the power of cinematic storytelling.
                </p>
            </section>
            <section className="mission">
                <h2 className="section-title">Our Mission</h2>
                <div className="mission-row">
                    <MissionCard
                        icon="&#9733;"
                        title="Discover"
                        text="Explore a large catalog of famous classics and hidden gems, all tailored to what you want to watch next."
                    />
                    <MissionCard
                        icon="&#9998;"
                        title="Review"
                        text="Share your voice. Write honest reviews, rate what you have seen, and argue about endings with a friendly crowd."
                    />
                    <MissionCard
                        icon="&#9788;"
                        title="Connect"
                        text="Join discussion boards, schedule watch parties, and meet people who love film as much as you do."
                    />
                </div>
            </section>
            <section className="stats">
                <Stat value="50K+" label="Reviews Shared" />
                <Stat value="10K+" label="Movies Catalogued" />
                <Stat value="100K+" label="Active Members" />
            </section>
            <section className="join">
                <h2>Ready to Join the Buzz?</h2>
                <p>
                    Get notified when we are screening discussions, custom avatars, and review
                    milestones will not cost more than a moment.
                </p>
                <Link to="/login" className="join-button">Sign Up For Free</Link>
            </section>
        </div>
    );
};

export default About;
