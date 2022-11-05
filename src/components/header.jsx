import './header.css'
import Button from "./button";
const header = () => {
    return (
        <div>
            <div className="header">
                <a className='logo'>Fly<span>Ops</span></a>
                <ul className="nav-link">
                    <a className="link">Community</a>
                    <a className="link">Online Classes</a>
                    <a className="link">Application</a>
                    <a className="link">Affliate Programs</a>  
                </ul>
                <div className="right">
                <a className="link login">Log in</a>
                <Button text = "Sign UP"/>
                </div>
            </div>
        </div> 

    );
}

export default header;