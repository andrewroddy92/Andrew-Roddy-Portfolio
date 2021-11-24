import React from "react";
import resume from '../andrew_roddy_resume.docx';

export default function Navbar() {

    return(
        <header>
            <nav>
                <ul>
                    <li><a href="#about">about</a></li>
                    <li><a href="#portfolio">work</a></li>
                    <li><a href="#home">contact</a></li>
                    <li><button><a href={resume} download>resume</a></button></li>
                </ul>
            </nav>
        </header>
    );
}