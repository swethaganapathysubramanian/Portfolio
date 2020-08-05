import React from 'react'
import codeicon from '../images/codeicon.png'
import webicon from '../images/webicon.png'
import responsiveicon from '../images/responsiveicon.png'
import myimage from '../images/myImage.JPG'
import ScrollAnimation from 'react-animate-on-scroll'


const About = () => {

    return(
        <div className="about-section" id="About">
            <div className="animate__slideLeft upsection">
                <div className="about-heading">
                    <ScrollAnimation animateIn='slideInLeft' animateOnce={true}>
                        <h2> About Me</h2>
                    </ScrollAnimation>
                </div>
                <div className = "row">
                    <div className="col span-1-of-3 content">
                        <ScrollAnimation animateIn='fadeIn' delay="100" animateOnce={true}>
                            <img src={codeicon} alt="clean code"/>
                            <h4>Cleaner Code</h4>
                            <p className="features-content">
                                I write clean, easily readable and maintainable code.
                            </p>
                        </ScrollAnimation>
                    </div>
                    <div className="col span-2-of-3 content">
                        <ScrollAnimation animateIn='fadeIn' delay="300" animateOnce={true}>
                            <img src={webicon} alt="clean code" />
                            <h4>Beautiful and impressive design</h4>
                            <p className="features-content">
                                I focus on designing and building beautiful websites that attract the viewers.
                            </p>
                        </ScrollAnimation>
                    </div>
                    <div className="col span-3-of-3 content">
                        <ScrollAnimation animateIn='fadeIn' delay="500" animateOnce={true}>
                            <img src={responsiveicon} alt="clean code" />
                            <h4> Responsive</h4>
                            <p className="features-content">
                                I create responsive web pages that work on any device.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className="card-postion">
                <div className="card-detail row">
                    <div className = "col span-1-of-2 aboutme">
                        <ScrollAnimation animateIn='slideInLeft' delay="600" animateOnce={true}>
                            <img src={myimage} alt="Picture"/>
                        </ScrollAnimation>
                    </div>
                    <div className="col span-2-of-2 aboutme-content">
                        <ScrollAnimation animateIn='slideInRight' delay="600" animateOnce={true}>
                            {/* <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p> */}
                            <p className="skills">
                            -HTML -CSS -JS -React -TypeScript -Node.js -Express.js -MongoDB -Postgres -Cypress
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About