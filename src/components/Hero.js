import React from 'react'


const Hero = () => {
    return(
        <div className = "hero">
            <div className="cover-text-box">
                <h1>Hello!!</h1>
                <h2 className="titleh2"> I&apos;m <span className="my-name"><strong>Swetha Ganapathy Subramanian</strong> </span></h2>
                <h2> I am a Full Stack Developer</h2> <br />
                <a className="btn btn-ghost js-scroll-to-start" href="#Projects">Checkout my work <ion-icon name="arrow-down-outline" className='arrow'></ion-icon></a>
                {/* <img src={builder} alt = "builder" /> */}
            </div>
            {/* <svg height="110" width="100%" preserveAspectRatio="none" viewBox="0 0 100 100" className='hero-svg'>
                <path d="M0 100 L50 100 L100 100 L100 0 L50 100 L0 0 Z" fill='white' stroke='white' />
            Sorry, your browser does not support inline SVG.
            </svg> */}
        </div>
    )
}

export default Hero