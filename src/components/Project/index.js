import React, { useState } from 'react';
// import resume from ''
import recipePic from './recipe.png';

function Project(props) {
	const { currentTab, setCurrentTab } = props;
    return(
        <section className="container">
            <span onClick={() => setCurrentTab("Portfolio")}></span>
            <h1 className="cards">Portfolio</h1>

                <article className="projects">
                <h4>Recipe Warriors</h4>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="project"></a>
                    <img className="projects-img" src={recipePic} alt="recipes" img></img>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="Recipe Warriors">
                    </a>
                </article>

                <article className="projects">
                <h4>Recipe Warriors</h4>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="project"></a>
                    <img className="projects-img" src={recipePic} alt="recipes" img></img>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="Recipe Warriors">
                    </a>
                </article>

                <article className="projects">
                <h4>Recipe Warriors</h4>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="project"></a>
                    <img className="projects-img" src={recipePic} alt="recipes" img></img>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="Recipe Warriors">
                    </a>
                </article>

                <article className="projects">
                <h4>Recipe Warriors</h4>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="project"></a>
                    <img className="projects-img" src={recipePic} alt="recipes" img></img>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="Recipe Warriors">
                    </a>
                </article>

                <article className="projects">
                <h4>Recipe Warriors</h4>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="project"></a>
                    <img className="projects-img" src={recipePic} alt="recipes" img></img>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="Recipe Warriors">
                    </a>
                </article>

                <article className="projects">
                <h4>Recipe Warriors</h4>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="project"></a>
                    <img className="projects-img" src={recipePic} alt="recipes" img></img>
                    <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="Recipe Warriors">
                    </a>
                </article>
                
        </section>
    )
}

export default Project; 

