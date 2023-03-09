import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer">
                <div className="logo">
                    <ul className="links">
                        <a className='logo'>Fly<span>Ops</span></a>
                        <li className="link">Community</li>
                        <li className="link">Affliate Program</li>
                        <li className="link">License</li>
                        <li className="link">Certification</li>
                    </ul>
                </div>
                <div className="company">
                    <ul className="links">
                        <li className="link head">Company</li>
                        <li className="link">About us</li>
                        <li className="link">Policy</li>
                        <li className="link">License</li>
                        <li className="link">Career</li>
                    </ul>
                </div>
                <div className="Programs">
                    <ul className="links">
                        <li className="link head">Programs</li>
                        <li className="link">Diploma</li>
                        <li className="link">Degree</li>
                        <li className="link">Diploma</li>
                        <li className="link">MOOCS</li>
                        <li className="link">Webinars</li>

                    </ul>
                </div>
                <div className="company">
                    <ul className="links">
                        <li className="link head">In the news</li>
                        <li className="link">Twitter</li>
                        <li className="link">Newsletter</li>
                        <li className="link">FlyOpts on BBC</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;