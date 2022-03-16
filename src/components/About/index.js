import React from 'react';
import background from "../../assets/cover/earth.jpg";
import selfPic from "../../assets/self/mypic.jpg"


function About() {
    return (
        <section className="cards"  style={{ backgroundImage: `url(${background})` }}>
            <h1 id="about">About Me</h1>
            <img src={selfPic} className="cards" style={{width: "25%"}}alt="self"/>
            <p> I'm Matthew Foster and I am currently enrolled in a fullstack web development coding bootcamp through University of Arizona. Once I complete this bootcamp, I will have a plethora of knowledge in coding concepts and programs.  At that time, I will actively look to change to a career in the coding field. I currently hold a bachelor's degree in business finance and a master's degree in Education. I have been a 5th grade teacher and team leader for 9 years. My goal is to transition to a full stack developer after completing the coding bootcamp.</p>
            {/* <img src={coverImage} className="my-2" style={{width: "100%"}} alt="cover"/> */}
        </section>
    )
}

export default About; 