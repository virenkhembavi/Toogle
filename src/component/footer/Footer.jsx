import "./Footer.css"
import '@fortawesome/fontawesome-free/css/all.min.css'



function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>Contact us</h3>
                        <p>Address: amet, consectetur adipiscing elit, sed diam</p>
                        <p>Email: eirmod tempor invidunt ut labore et dolore</p>
                        <p>Phone no: 123456789</p>
                    </div>

                    <div className="footer-column social">
                        <h3>Follow us</h3>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fas fa-search"></i></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Head Office</h3>
                        <ul className="office-info">
                            <li><i className="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit amet, consectetur...</li>
                            <li><i className="fas fa-clock"></i> Lorem ipsum dolor sit amet, consectetur...</li>
                            <li><i className="fas fa-phone-alt"></i> Lorem ipsum dolor sit amet, consectetur...</li>
                            <li><i className="fas fa-building"></i> Lorem ipsum asd asdsaweeq Lorem Ipsum</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                © 2021 All Rights Reserved. Privacy Policy
            </div>
        </>
    )
}

export default Footer
