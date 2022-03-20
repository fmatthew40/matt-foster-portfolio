import React, { useState } from 'react';
// import resume from ''

function Project(props) {
	const { currentTab, setCurrentTab } = props;
    return(
        <section>
            <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
            <h1>Projects</h1>
        
             


                <article className="projects">
                    <a href="https://recipe-warriors.herokuapp.com/" alt="project"></a>
                    <img src="./recipe.png" alt="recipes" img></img>
                    <a href="https://recipe-warriors.herokuapp.com/" alt="Recipe Warriors">
                    <h4>Group Project - Recipe Warriors</h4></a>
                </article>

                <article className="projects">
                    <a href="" alt="project"></a>
                    <img src="" alt="" img></img>
                    <a href="" alt="Bored and Brews">
                    <h4>Group Project - Bored and Brews</h4></a>
                </article>

                <article className="projects">
                    <a href="" alt="project"></a>
                    <img src="" alt="" img></img>
                    <a href="" alt="Bored and Brews">
                    <h4>Group Project - Bored and Brews</h4></a>
                </article>

                <article className="projects">
                    <a href="" alt="project"></a>
                    <img src="" alt="" img></img>
                    <a href="" alt="Bored and Brews">
                    <h4>Group Project - Bored and Brews</h4></a>
                </article>

                <article className="projects">
                    <a href="" alt="project"></a>
                    <img src="" alt="" img></img>
                    <a href="" alt="Bored and Brews">
                    <h4>Group Project - Bored and Brews</h4></a>
                </article>

                <article className="projects">
                    <a href="" alt="project"></a>
                    <img src="" alt="" img></img>
                    <a href="" alt="Bored and Brews">
                    <h4>Group Project - Bored and Brews</h4></a>
                </article>
                
        </section>
    )
}

export default Project; 

