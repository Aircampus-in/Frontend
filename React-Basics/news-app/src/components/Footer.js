import Clock from './Clock';
// import {useState} from 'react';

function Footer(){

    // const[toggle, setToggle] = useState(true);
    return(
        <footer>
            <div className="container footer-flex">
                <ul className="social">
                    <li className="social-item"><a href="/">Twitter</a></li>
                    <li className="social-item"><a href="/">LinkedIn</a></li>
                    <li className="social-item"><a href="/">Instagram</a></li>
                </ul>
                <Clock/>
                {/* {toggle ? <Clock/>: ''} */}
                {/* <button onClick={()=>setToggle(!toggle)}>toggle</button> */}
            </div>
            
        </footer>
    );
}

export default Footer;