import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { FaEnvelope } from "react-icons/fa";
import {FaFile} from "react-icons/fa";
import Button from '@mui/material/Button';
import {FaStackOverflow} from "react-icons/fa"
import Pdf from './resume.pdf'; 
// import { Tooltip } from 'react-tooltip';
import { Tooltip , IconButton } from '@mui/material'
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#292418',
      },
      secondary: {
        main : '#e6ceac'
      }
    },
  });


const Topbar = () => {
    return (
    <nav className = "topbar">
        <h1 className = "topbar-title">Socials</h1>
        <ul className = "topbarul">
          <li><Button target="_blank" href={Pdf} sx= {{ "&:hover": {color: "#e6ceac" , backgroundColor: "#292418" , borderColor: "#292418"} , borderColor: "#292418" ,color : "#292418",backgroundColor:  "#e6ceac",  fontSize: '15px' , paddingTop: '10px' , fontFamily: 'dogicapixel' , zIndex: '10000'}} size= "large" variant="outlined">Resume</Button></li>
           {/* StackOverflow*/}
           <li className = "topbarli">
            
            <ThemeProvider theme={theme}>
            
            <IconButton target="_blank" sx={{ "&:hover": { color: "#e6ceac" , backgroundColor: "#292418"}}} size = "small" color="primary" href="https://stackoverflow.com/users/13527575/recondit" ><FaStackOverflow size="2.2em"/></IconButton>
            </ThemeProvider>
      
            </li>










          {/* LinkedIN */}
            <li className = "topbarli">
            
            <ThemeProvider theme={theme}>
            {/* <Tooltip title = "LinkedIn" componentsProps={{
    tooltip: {
      sx: {
        bgcolor: "#FFE1A8",
        color: "#472D30",
        fontSize: "14px",
        
      },
    },
  }} arrow> */}
            <IconButton target="_blank" sx={{ "&:hover": { color: "#e6ceac" , backgroundColor: "#292418"}}} size = "small" color="primary" href="https://www.linkedin.com/in/divij-dhiraaj-3ba357188/" ><FaLinkedinIn size="2.2em"/></IconButton>
            {/* </Tooltip> */}
            </ThemeProvider>
      
            </li>
            {/* Github */}
            <li>
            <ThemeProvider theme={theme}>
           
            <IconButton target="_blank"sx={{ "&:hover": {  color: "#e6ceac" , backgroundColor: "#292418"}}} size = "small" color="primary" href="https://github.com/Recondit"><FaGithub size="2.2em"/></IconButton>
            </ThemeProvider>
            </li>
            {/* Gmail */}
            <li>
            <ThemeProvider theme={theme}>
            
            <IconButton target="_blank"sx={{ "&:hover": { color: "#e6ceac" , backgroundColor: "#292418"}}} size = "small" color="primary" className = "emailicon"href="mailto:divijdhiraaj@gmail.com,dhiraajd@mcmaster.ca"><FaEnvelope size="2.2em"/></IconButton>
            </ThemeProvider>
            </li>
            {/* Resume*/}
            {/* <li>
            <ThemeProvider theme={theme}>
            <Tooltip title = "Resume" componentsProps={{
    tooltip: {
      sx: {
        bgcolor: "#FFE1A8",
        color: "#472D30",
        fontSize: "14px",
        '& .MuiTooltip-arrow': {
          color: "#FFE1A8",
        },
      },
    },
  }} arrow>
            <IconButton target="_blank" sx={{ "&:hover": { color: "#472D30" , backgroundColor: "#FFE1A8"}}} size = "small" color="primary" className = "resumeicon" href={Pdf} ><FaFile size="2.2em"/></IconButton></Tooltip>
            </ThemeProvider>
            </li> */}

        </ul>
    </nav>
    );
}

export default Topbar;