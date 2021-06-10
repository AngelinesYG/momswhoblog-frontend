import React from 'react'
import '../App.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
               <h5>About The Developer</h5>
                <p>Moms Who Blog was inspired by a working mom during a school project. For this mom, learning to code and create web pages while raising three small children and a teenager, in addition to taking care of a house and bills proved more challenging than expected. But with God and through hard work and dedication, nothing is impossible!</p>
                <h5>Thanks for visiting!</h5>
                <ul>
                    <li>
                        <p>By:</p>
                        <p>Angelines Yaport-Garcia</p>
                        <a href="https://www.linkedin.com/in/angelines-yaport-garcia/" target="https://www.linkedin.com/in/angelines-yaport-garcia/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/AngelinesYG" target="https://github.com/AngelinesYG">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer
