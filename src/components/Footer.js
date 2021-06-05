import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
               <h5>About The Developer</h5>
                <p>Moms Who Blog was inspired by a working mom during a school project. Learning to code and create web pages while raising three small children and a teenager, in addition to taking care of a house and bills proved more challenging than expected.</p>
                <p>While being a working mom is no new things to all moms out there, being able to vent safely and effectively, while listening to other moms struggles is definitely scarse.</p>
                <p>Moms Who Blog offers the freedom of letting go through the written word and ability to connect to other moms going through similar situation and supporting each other.</p>
                <h5>Thanks for visiting!</h5>
                <p>project by:</p>
                <ul>
                    <li>
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
