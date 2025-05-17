import { useState } from "react"
import "./Header.css"

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">LOGO</div>

                    <div className={`nav-container ${mobileMenuOpen ? "active" : ""}`}>
                        <nav className="main-nav">
                            <ul>
                                <li className="dropdown">
                                    <a href="#">
                                        Qualifications <i class="fa-solid fa-angle-down"></i>
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        Organizations <i class="fa-solid fa-angle-down"></i>
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        Research & Analysis <i class="fa-solid fa-angle-down"></i>
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        Lorem ipsum <i class="fa-solid fa-angle-down"></i>
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        Lorem ipsum <i class="fa-solid fa-angle-down"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="header-actions">
                            <button className="search-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                            <button className="enrolment-btn">Enrolment</button>
                        </div>
                    </div>

                    <button
                        className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
