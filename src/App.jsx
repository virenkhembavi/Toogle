import "./App.css"
import CommitmentsSlider from "./component/commitmentsSlider/CommitmentsSlider"
import Examinations from "./component/Examinations/Examinations"
import Faq from "./component/faq/Faq"
import Footer from "./component/footer/Footer"
import Header from "./component/header/Header"
import Hero from "./component/hero/Hero"
import Stats from "./component/stats/Stats"
import Subscribe from "./component/subscribe/Subscribe"

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <div className="website-preview">
          <Header />
          <Hero />
          <Examinations />
          <CommitmentsSlider />
          <Stats />
          <Faq />
          <Subscribe />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
