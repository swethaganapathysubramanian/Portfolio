import React from 'react'


const Hero = () => {
    return(
        <div className = "hero">
            <div className="cover-text-box">
                <h1>Hello!!</h1>
                <h2 className="titleh2"> I&apos;m <span className="my-name"><strong>Swetha Ganapathy Subramanian</strong> </span></h2>
                <h2> I am a Full Stack Developer</h2> <br />
                {/* <a className="btn btn-ghost js-scroll-to-start" href="#Projects">Checkout my work</a> */}
                {/* <img src={builder} alt = "builder" /> */}
            </div>
        </div>
    )
}

export default Hero