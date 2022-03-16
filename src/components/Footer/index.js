import React from 'react';
import git from './github.png'

function Footer() {
    return(
        <footer className="mx-2">
            <div>
                <ul className="mx-2">  
                    <li>
                        <a href = "https://github.com/fmatthew40" target="_blank">Github Profile</a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/matthew-foster-513987234" target="_blank"><img src={git}></img></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/fostmatt88" target="_blank">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer; 