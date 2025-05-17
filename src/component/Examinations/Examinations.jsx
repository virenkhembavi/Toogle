
import './Examinations.css'
import Cal from '../../assets/Group.svg'

export default function Examinations() {
    return (
        <section className="examinations">
            <div className="container">
                <div className="examinations-content">
                    <div className="examinations-header">
                        <h2>
                            Upcoming
                            <br />
                            Examinations
                        </h2>
                        <p>Enquire about the examination & register for the exams</p>
                    </div>

                    <div className="exam-cards">
                        <div className="exam-card">
                            <div className="exam-icon">
                                <img src={Cal} alt="Calendar Icon" width={50} height={50} />
                            </div>
                            <div className="exam-details">
                                <h3>02th October 2014</h3>
                                <p>Level 1 exam</p>
                            </div>
                        </div>

                        <div className="exam-card">
                            <div className="exam-icon">
                                <img src={Cal} alt="Calendar Icon" width={50} height={50} />
                            </div>
                            <div className="exam-details">
                                <h3>Nov-Dec 2016</h3>
                                <p>Level 2</p>
                                <p>Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>

                        <div className="exam-card">
                            <div className="exam-icon">
                                <img src={Cal} alt="Calendar Icon" width={50} height={50} />
                            </div>
                            <div className="exam-details">
                                <h3>Ongoing this year</h3>
                                <p>Level 3 (Grad)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
