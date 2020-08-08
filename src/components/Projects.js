import React from 'react'
import recipedetector from '../images/projects/Recipedetector.PNG'
import banklandingpage from '../images/projects/BankLandingPage.PNG'
import groceryshopping from '../images/projects/Grocery Shopping.PNG'
import blogopedia from '../images/projects/Blogopedia.PNG'


const Projects = () => {
    return(
        <div className="project-section" id="Projects">
            <div className="project-heading">
                <h1> Projects </h1>
            </div>
            <p className="line proj-line title-line" />
            <div className="project-content row">
                <div className="project-data span-1-of-2 col">
                    <p>
                        <h3 className="project-title"> Recipe Detector</h3>
                        Built with <strong className="my-name1">React, Clarifai api and Edamam api</strong> <br /> <br />
                        Detects ingredients from the searched image and suggests recipes related to the image.
                        <p> <a href='https://github.com/swethaganapathysubramanian/RecipeDetector'> <ion-icon name="logo-github"> </ion-icon></a>
                            <a href="https://swethaganapathysubramanian.github.io/RecipeDetector/"><ion-icon name="open-outline"></ion-icon></a></p>
                    </p>
                </div>
                <div className = "project-image col span-2-of-2 ">
                    <img src ={recipedetector} alt="Recipe Detector"/>
                </div>
            </div>
            <p className="line proj-line" />
            <div className="project-content row">
                <div className="project-image  span-1-of-2 col resp2">
                    <img src={banklandingpage} alt="Bank Landing Page" />
                </div>
                <div className="project-data col span-2-of-2">
                    <p>
                        <h3 className="project-title"> Bank Landing Page</h3>
                        Built with <strong className="my-name1">HTML, CSS, JS, jquery, node.js, express.js and postgres</strong> <br /> <br />
                        Landing page for &quot;Easy Bank&quot; built for Front End Mentor Challenge with Added funtionality to get user&apos;s Name and Email for requesting Invite.
                        <p> <a href='https://github.com/swethaganapathysubramanian/BankLandingPage'> <ion-icon name="logo-github"> </ion-icon></a>
                            <a href="https://banklandingpage.netlify.com/"><ion-icon name="open-outline"></ion-icon></a></p>
                    </p>
                    <div className="project-image col resp">
                        <img src={banklandingpage} alt="Bank Landing Page" />
                    </div>
                </div>
            </div>
            <p className="line proj-line" />

            <div className="project-content row">
                <div className="project-data  span-1-of-2 col">
                    <p>
                        <h3 className="project-title"> Grocery Shopping</h3>
                        Built with <strong className="my-name1">HTML, CSS, JS, Webpack and Babel</strong> <br /> <br />
                        Grocery shopping app allows users to search for recipes using the spoonacular Api. Users can change the serving count, add ingredients to shopping list and export it.<br/>
                        <p> <a href='https://github.com/swethaganapathysubramanian/GroceryShopping'> <ion-icon name="logo-github"> </ion-icon></a>
                            <a href="https://livetoeat.netlify.com/"><ion-icon name="open-outline"></ion-icon></a></p>
                    </p>
                </div>
                <div className="project-image col span-2-of-2 ">
                    <img src={groceryshopping} alt="Grocery Shopping" />
                </div>
            </div>
            <p className="line proj-line" />

            <div className="project-content row">
                <div className="project-image col span-1-of-2 resp2">
                    <img src={blogopedia} alt="Blogopedia" />
                </div>
                <div className="project-data col span-2-of-2">
                    <p>
                        <h3 className="project-title"> Blogopedia </h3>
                        Built with <strong className="my-name1">MERN stack and Redux</strong> <br /> <br />
                        Blogopedia is a platform to share/promote your own blog and read variety of blogs and review them
                        <p> <a href='https://github.com/swethaganapathysubramanian/BlogListFrontEnd'> <ion-icon name="logo-github"> </ion-icon></a>
                            <a href="https://jovial-nightingale-1b3691.netlify.app/login"><ion-icon name="open-outline"></ion-icon></a></p>
                    </p>
                    <div className="project-image col resp">
                        <img src={blogopedia} alt="Blogopedia" />
                    </div>
                </div>

            </div>
            <br/>
        </div>
    )
}

export default Projects
