import React from 'react';

function Nav() {
    return(
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="sparkles">✨</span>Matthew Foster
                </a>
            </h2>
            <nav>
                <ul className="flexrow">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                        </li>
                        <li>
                            <span>Portfolio</span>
                        </li>
                        <li className="mx-2">
                            <span>Contact</span>
                        </li>
                        <li>
                            <span>Resume</span>
                        </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;