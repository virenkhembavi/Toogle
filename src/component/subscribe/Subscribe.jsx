import "./Subscribe.css"
import Arrow from "../../assets/RightArrow.svg"

function Subscribe() {
    return (
        <section className="subscribe-section">
            <div className="container">
                <h2 className="section-title">Subscribe</h2>

                <div className="subscribe-content">
                    <div className="subscribe-text">
                        <h1>Subscribe</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                        <div className="subscribe-form">
                            <input type="email" placeholder="Email address" />
                            <button>Subscribe Now <img src={Arrow} width={12} height={12} /></button>
                        </div>
                    </div>
                    <div className="subscribe-image">
                        <img src="/src/assets/HoldingPhone.png" alt="Person with phone" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
