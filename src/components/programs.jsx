import React from "react";
import Pilot from "./assets/student.png";
import './programs.css';
const Programs = () => {
    return (
        <div>
            <div className="programs-container">
                <div className="first-div-programs">
                    <div className="image-div-programs">
                        <img src={Pilot} alt="" />
                    </div>
                    <div className="right-div-programs">
                        <h1>Students pilot program</h1>
                        <p>Making the most use of the technologies available for effective learnings and using mentor ship programs access years of experience</p>
                    </div>
                </div>
                <div className="second-div-programs">
                <h1>Diploma offerings</h1>
                    <ul>
                        <li>3 day seminar</li>
                        <li>2 weeks training</li>
                        <li>Airline affliate</li>
                        <li>Mentorship</li>
                        <li>Diploma</li>
                        <li>Degree</li>
                        <li>MOOCS</li>
                        <li>Ground Test</li>
                        <li>VR Testing</li>
                        <li>Gaming</li>
                        <li>Demo Day</li>
                        <li>Software Eng</li>
                    </ul>
                </div>
               
            </div>
        </div>
    );
}

export default Programs;