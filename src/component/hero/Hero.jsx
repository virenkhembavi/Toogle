import { useEffect, useState, useRef } from "react";
import "./Hero.css";
import Arrow from "../../assets/RightArrow.svg";
import Img1 from "../../assets/Runningman.png";
import Img2 from "../../assets/Runningman.png";
import Img3 from "../../assets/Runningman.png";

const slides = [
    {
        title: "Lorem ipsum",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
        image: Img1,
    },
    {
        title: "Lorem ipsum",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
        image: Img2,
    },
    {
        title: "Lorem ipsum",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
        image: Img3,
    },
];

function Hero() {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const totalSlides = Math.ceil(slides.length / 1);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX.current;

        if (diff > 50) setCurrent((prev) => (prev + 1) % slides.length);
        if (diff < -50) setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slide = slides[current];

    const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

    return (
        <section className="hero-section">
            <div className="container">
                <div
                    className="hero-content fade-slide"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="hero-text">
                        <h1>{slide.title}</h1>
                        <p>{slide.desc}</p>
                        <button className="learn-more-btn">
                            Know More <img src={Arrow} width={12} height={12} />
                        </button>
                    </div>
                    <div className="hero-image">
                        <img src={slide.image} alt={slide.title} />
                    </div>
                </div>

                <button className="slider-arrow prev" onClick={prevSlide}>❮</button>
                <button className="slider-arrow next" onClick={nextSlide}>❯</button>

                <div className="dots">
                    {slides.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === current ? "active" : ""}`}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
