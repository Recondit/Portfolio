import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import './App.css';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <ul className = "navbarul">
            <li className = "navbarli">
            <a className = "linkedinicon" href="https://www.linkedin.com/in/divij-dhiraaj-3ba357188/"><FaLinkedin size="2.2em"/></a>
            </li>
            <li>
            <a className = "githubicon"href="https://github.com/Recondit"><FaGithub size="2.2em"/></a>
            </li>
        </ul>
        </nav>
    );
}
 
export default Navbar;