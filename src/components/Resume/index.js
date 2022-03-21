import React from 'react';
import resLink from './Resume-tech.pdf'

function Resume(props) {
	const { currentTab, setCurrentTab } = props;
    return(
        <section>
            <h2 className="center">Resume</h2>

            <a className="centered" href = {resLink} target="_blank" rel="noreferrer">Download Resume</a>

            <div className="container">
            <ul>Front-End Proficiencies:
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>React</li>
            </ul>
            <ul>Back-End Proficiencies:
                <li>API's</li>
                <li>Node.Js</li>
                <li>Express.js</li>
                <li>Javascript</li>
            </ul>

            <ul>Database Proficiencies:
                <li>SQL</li>
                <li>NoSQL</li>
                <li>Mongoose</li>
                <li>Sequelize</li>
            </ul>

            <ul>Other Proficiencies:
                <li>Git</li>
                <li>MERN</li>
                <li>State</li>
                <li>PWA's</li>
                <li>OOP</li>
                <li>Heroku</li>
                <li>bcrypt</li>
            </ul>
            </div>
        </section>
    )
}

export default Resume; 
