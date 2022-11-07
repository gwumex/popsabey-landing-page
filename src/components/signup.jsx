import React, { useState } from "react";
import './signup.css';
import Button from "./button";
import Drone2 from "./assets/drone2.png"

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p>
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };


const Signup = () => {
    return (
        <div>
            <div className="signup-container">
                <div className="first-div-signup">
                    <h1>Sign up and get certified in 9 months</h1>
                    <p>Enroll to become certified in drone piloting and operations, explore how drone technologies
                        operate with structed learning.</p>
                    <div className="btn-group signup-btn">
                        <Button text="Enroll For Free" />
                        <Button text="Demo day" styles="explore" />
                    </div>
                </div>
                <div className="second-div-signup">
                    <div className="image-div-signup ">
                        <img src={Drone2} alt="" />
                    </div>
                    <div className="right-div-signup">
                        <h1>Know these things before
                            getting a personal drone
                        </h1>
                        <p>
                        <ReadMore>
                            Getting a drone for home or personal use can seem exciting, but there
                            is more to know before going ahead with it. Drones operate in the
                            aero-space industries with laws guiding getting a drone for home or personal use can seem exciting, but there is more to know before going ahead with it. Drones operate in the ero-space industries with laws guiding..                          
                        </ReadMore>
                          </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;