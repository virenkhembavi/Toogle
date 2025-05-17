import "./Hero.css"
import Arrow from "../../assets/RightArrow.svg"

function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Lorem ipsum</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        </p>
                        <button className="learn-more-btn">Know More <img src={Arrow} width={12} height={12} /></button>
                    </div>
                    <div className="hero-image">
                        <img src="/src/assets/Mask Group 99.png" alt="Person with magnifying glass" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
