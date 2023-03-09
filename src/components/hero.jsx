import React from "react";
import Button from "./button";
import Drone from "./assets/drone.png";
import Emirate from "./assets/Emirates.png";
import Americans from "./assets/Americans.png";
import British from "./assets/british.png";
import './hero.css';

const Hero = () => {
    const ic = <span class="material-symbols-outlined">
    play_arrow
    </span>;
    return (
        <div className="hero">
            <div className="details">
                <div className="left-div-hero">
                    <h1 className="heading">Salami olawunmi</h1>
                    <p>Enroll to become certified in drone piloting and operations,
                        explore how drone technologies operate with structed learning.
                    </p>
                    <div className="btn-group">
                    <Button text = "Enroll For Free"/>
                    <Button text = "Demo day" styles = "explore" icons = {ic}/>
                    </div>
                </div>
                <div className="right-div-hero">
                    <img src={Drone} alt="" />
                </div>
            </div>
            <div className="gradutes">
                <h2>Our gradutes works at</h2>
                <div className="gradutes-img">
                    <img src={Emirate} alt="" />
                    <img src={Americans} alt="" />
                    <img src={British} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Hero;