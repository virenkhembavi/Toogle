import { useState, useEffect, useRef } from "react";
import "./CommitmentsSlider.css";

function CommitmentsSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());
    const sliderRef = useRef(null);

    const commitments = [
        { title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Dolor sit amet", description: "Consectetur adipiscing elit" },
        { title: "Consectetur elit", description: "Ut enim ad minim veniam" },
        { title: "Sed do eiusmod", description: "Duis aute irure dolor in reprehenderit" },
        { title: "Tempor incididunt", description: "Excepteur sint occaecat cupidatat non proident" },
        { title: "Tempor incididunt", description: "Excepteur sint occaecat cupidatat non proident" },
        { title: "Tempor incididunt", description: "Excepteur sint occaecat cupidatat non proident" },
        { title: "Tempor incididunt", description: "Excepteur sint occaecat cupidatat non proident" },
        { title: "Tempor incididunt", description: "Excepteur sint occaecat cupidatat non proident" },
    ];

    function getCardsPerSlide() {
        const width = window.innerWidth;
        if (width < 640) return 1;       // Mobile
        if (width < 1024) return 2;      // Tablet
        return 3;                        // Desktop
    }

    useEffect(() => {
        const handleResize = () => {
            setCardsPerSlide(getCardsPerSlide());
            setCurrentSlide(0); // Optional: reset to first slide on resize
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalSlides = Math.ceil(commitments.length / cardsPerSlide);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    const goToSlide = (index) => setCurrentSlide(index);

    const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
    const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) nextSlide();
        if (touchStart - touchEnd < -75) prevSlide();
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    return (
        <section className="commitments-section">
            <div className="container">
                <h2 className="section-title">Upcoming Commitments</h2>

                <div className="slider-container">
                    <div
                        className="slider-wrapper"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="slider" ref={sliderRef} >
                            {[...Array(totalSlides)].map((_, i) => (
                                <div className="slide" key={i} >
                                    <div className="cards-container">
                                        {commitments
                                            .slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide)
                                            .map((commitment, index) => (
                                                <div className="commitment-card" key={index}>
                                                    <h3>{commitment.title}</h3>
                                                    <p>{commitment.description}</p>
                                                    <div className="card-footer">
                                                        <span>Learn more</span>
                                                        <div className="arrow-circle"><i class="fa-solid fa-arrow-right"></i></div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="slider-arrow prev" onClick={prevSlide}>❮</button>
                    <button className="slider-arrow next" onClick={nextSlide}>❯</button>

                    <div className="slider-dots">
                        {[...Array(totalSlides)].map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${currentSlide === index ? "active" : ""}`}
                                onClick={() => goToSlide(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommitmentsSlider;
