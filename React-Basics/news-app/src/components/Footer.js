import Clock from './Clock';

function Footer(){
    return(
        <footer>
            <div className="container footer-flex">
                <ul className="social">
                    <li className="social-item"><a href="/">Twitter</a></li>
                    <li className="social-item"><a href="/">LinkedIn</a></li>
                    <li className="social-item"><a href="/">Instagram</a></li>
                </ul>
                <Clock/>
            </div>
            
        </footer>
    );
}

export default Footer;