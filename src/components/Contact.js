import React from 'react'

const Contact = () => {
    return(
        <div>
            <div className="contact-section" id="Contact">
                <svg as height="75" preserveAspectRatio="none" width="100%" viewBox="0 0 100 100">
                    <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white" />
                    Sorry, your browser does not support inline SVG. M0 0 L50 100 L100 0 Z
                </svg>
                {/* <div className="contact-heading">
                    <h2> Contact</h2>
                </div> */}
                <div className="contact-content">
                    <h3> Lets get in touch</h3> <br/>
                    <p style={{ fontStyle:'italic' }}> How do you take your coffee?</p><br/>
                    <div className="links">
                        <a id="profile-link" href="https://www.linkedin.com/in/swethaganapathysubramanian/" target="_blank" rel="noopener noreferrer" className="cntbtn contact-details">
                            <ion-icon name="logo-linkedin"></ion-icon></a>
                        <a id="profile-link" href="https://github.com/swethaganapathysubramanian" target="_blank" rel="noopener noreferrer" className="cntbtn contact-details">
                            <ion-icon name="logo-github"></ion-icon></a>
                        <a id="profile-link" href="mailto:swethaganapathy2@gmail.com" target="_blank" rel="noopener noreferrer" className="cntbtn contact-details">
                            <ion-icon name="mail-open-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact