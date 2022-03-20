import React, { useState } from 'react';
// import App from '../../App'
// import resume from ''

function Resume({ currentCategory }) {
    const { name, description } = currentCategory;
    return(
        <section>
            <h2>Resume</h2>
            <h1 >{(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>

            <p>Download Resume</p>
            <ul>Front-End Proficiencies:
                <li>HTML, CSS, Javascript</li>
                <li>Web APIs, Third-Party APIs, Server-Side APIs</li>
                <li>Node.js, OOP, Express.js</li>bjjkhjkhj
          <h1> {name}</h1>
            </ul>

        </section>
    )
}


export default Resume; 




// function Resume(props) {


//     const { currentCategory } = props;
//     return (
//       <section>
//         <h1 >{(currentCategory.name)}</h1>
        
        
//         <p>{currentCategory.description}hdkjfhkasdj</p>
//         <Resume category={currentCategory.name} />
//       </section>
//     );
//   }
//   export default Resume;