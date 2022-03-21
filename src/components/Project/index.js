import React, { useState } from 'react';
import recipePic from './recipeswebsite.png';
import budgetsPic from './budgets.png'
import weatherPic from './weather.png'
import workPic from './work.png'
import foodPic from './food.png'
import passwordPic from './password.png'
import codePic from './codequiz.png'
import boredPic from './boredb.png'

function Project(props) {
	const { currentTab, setCurrentTab } = props;
    return(
        <section className="container">
            <span onClick={() => setCurrentTab("Portfolio")}></span>
            <h1 className="cards">Portfolio</h1>

            <article className="projects">
                <h4>
                <a href="https://desolate-sea-00675.herokuapp.com/" target="_blank" rel="noreferrer" alt="github repo">Budget Binder</a></h4>
                <h4>
                <a href="https://github.com/fmatthew40/budget-binder" target="_blank" rel="noreferrer" alt="github repo">Github Repository</a></h4>
                <img className="projects-img" src={budgetsPic} alt="budget app"></img>   
            </article>

            <article className="projects">
                <h4>
                <a href="https://fmatthew40.github.io/weather-dashboard/" target="_blank" rel="noreferrer" alt="github repo">Weather Dashboard</a></h4>
                <h4>
                <a href="https://github.com/fmatthew40/weather-dashboard" target="_blank" rel="noreferrer" alt="github repo">Github Repository</a></h4>
                <img className="projects-img" src={weatherPic} alt="weather app"></img>   
            </article>

            <article className="projects">
                <h4>
                <a href="https://fmatthew40.github.io/work-day-scheduler/" target="_blank" rel="noreferrer" alt="github repo">Work Day Scheduler</a></h4>
                <h4>
                <a href="https://github.com/fmatthew40/work-day-scheduler" target="_blank" rel="noreferrer" alt="github repo">Github Repository</a></h4>
                <img className="projects-img" src={workPic} alt="work scheduler"></img>   
            </article>

            <article className="projects">
                <h4>
                <a href="https://fmatthew40.github.io/food-festival/" target="_blank" rel="noreferrer" alt="github repo">Food Festival</a></h4>
                <h4>
                <a href="https://github.com/fmatthew40/food-festival" target="_blank" rel="noreferrer" alt="github repo">Github Repository</a></h4>
                <img className="projects-img" src={foodPic} alt="food festival app"></img>   
            </article>

            <article className="projects">
                <h4>
                <a href="https://fmatthew40.github.io/password-generator/" target="_blank" rel="noreferrer" alt="github repo">Password Generator</a></h4>
                <h4>
                <a href="https://github.com/fmatthew40/password-generator" target="_blank" rel="noreferrer" alt="github repo">Github Repository</a></h4>
                <img className="projects-img" src={passwordPic} alt="password generator"></img>   
            </article>

            <article className="projects">
                <h4>
                <a href="https://recipe-warriors.herokuapp.com/" target="_blank" rel="noreferrer" alt="github repo">Recipe Warriors</a></h4>
                <h4>
                <a href="https://github.com/fmatthew40/recipe-warriors" target="_blank" rel="noreferrer" alt="github repo">Github Repository</a></h4>
                <img className="projects-img" src={recipePic} alt="recipes"></img>   
            </article>

            <article className="projects">
                <h4>
                <a href="https://fmatthew40.github.io/code-quiz/" target="_blank" rel="noreferrer" alt="github repo">Code Quiz</a></h4>
                <h4>
                <a href="https://github.com/fmatthew40/code-quiz" target="_blank" rel="noreferrer" alt="github repo">Github Repository</a></h4>
                <img className="projects-img" src={codePic} alt="code quiz"></img>   
            </article>

            <article className="projects">
                <h4>
                <a href="https://fmatthew40.github.io/bored-and-brews/" target="_blank" rel="noreferrer" alt="github repo">Bored and Brews</a></h4>
                <h4>
                <a href="https://github.com/fmatthew40/bored-and-brews" target="_blank" rel="noreferrer" alt="github repo">Github Repository</a></h4>
                <img className="projects-img" src={boredPic} alt="bored and brews"></img>   
            </article>

        </section>
    )
}

export default Project; 

