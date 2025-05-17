import { useState } from "react"
import "./Faq.css"
import PlusIcon from '../../assets/plus.svg'
import MinsIcon from '../../assets/DND.svg'

function Faq() {
    const faqItems = [
        {
            question: "Lorem ipsum dolor sit amet?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            question: "Consectetur adipiscing elit?",
            answer:
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            question: "Ut enim ad minim veniam?",
            answer:
                "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        {
            question: "Duis aute irure dolor in reprehenderit?",
            answer:
                "In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="section-title">FAQ</h2>

                <div className="accordion">
                    {faqItems.map((item, index) => (
                        <div className={`accordion-item ${activeIndex === index ? "active" : ""}`} key={index}>
                            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                <h3>{item.question}</h3>
                                <span className="accordion-icon">{activeIndex === index ? <img src={MinsIcon} width={20} height={20} /> : <img src={PlusIcon} width={20} height={20} />}</span>
                            </div>
                            <div className="accordion-content">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq
