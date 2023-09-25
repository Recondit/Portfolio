import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Sticky } from 'react-scroll-motion';
import './App.css';
import Card from './Card';
import Navbar from './Navbar';
import Topbar from './Topbar';
import {FaFile} from "react-icons/fa";
import Pdf from './resume.pdf';
// import { Tooltip } from 'react-tooltip';
import { Tooltip , IconButton } from '@mui/material'
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';


import { createTheme, ThemeProvider } from '@mui/material/styles';


// image imports
import tick_img from './assets/plan-or-to-do-list-concept-with-hand-drawn-text-checklist-task-list-illustration-in-flat-cartoon-style-on-white-background-vector.jpeg'

import boid_img from './assets/original.png'

import brevity_img from './assets/brevity5.png'

import rush_img from './assets/Screenshot 2023-05-17 at 1.46.51 PM.png'

import solitude_img from './assets/Site.PNG'

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#FFE1A8',
      },
      secondary: {
        main : '#472D30'
      }
    },
  });




const FadeUp = batch(Fade(), Move(0 , 667 , null , -135), Sticky());
function App() {
  return (
<div className = "App">

<div className = "TopNav">
<Topbar/>
</div>
<div className = "content">
<ParticlesBackground/>
<ScrollContainer>
  <ScrollPage page={0}>
    <Animator animation={FadeUp}>
          <h1>Hi, how are you? 👋</h1>
          <a className = "hint">(Psstt.. Keep Scrolling)</a>
    </Animator>
  </ScrollPage>
  
  <ScrollPage page={1}>
    <Animator animation={FadeUp}>
    
          <h1>I'm <span class = "name">Divij</span></h1>
          <h1> A 3<sup>rd</sup> year <span>Computer Science</span> student at <span class = "name">McMaster University</span></h1>

    </Animator>
  </ScrollPage>

  <ScrollPage page={2}>
    <Animator animation={FadeUp}>
          <a class = "dev">
          <h1>I'm an enthusiast game developer and programmer </h1></a>
          <a class = "swim">
          <h1>I love to swim and cook in my free time :)</h1>
          </a>

    </Animator>
  </ScrollPage>
  <ScrollPage page={3}>
    <Animator animation={FadeUp}>
          <h1>Here are some of my projects</h1>
    </Animator>
  </ScrollPage>
  <ScrollPage page={4}>
    <Animator animation={FadeUp}>
    <div class="flex-container">
      <center>
      <div class="flex-child">
        <Card name = "Tick-it" image = {tick_img} body = "A minimalist todo app with a backend for user authentication and device synchronization" href = "https://github.com/Recondit/TickIT"/>
      </div>

      <div class="flex-child">
        <Card name = "Boids" image = {boid_img} body = "A beautiful pygame simulation of the real-life marine phenomenon of boids" href = "https://github.com/Recondit/Boids"/>
      </div>

      <div class="flex-child">
        <Card name = "Brevity" image = {brevity_img} body = "A useful college tool that summarises a lecture video into its key points" href = "https://github.com/Recondit/Brevity"/>
      </div>

      <div class="flex-child">
        <Card name = "Solitude" image = {solitude_img} body = "A unity game under development revolving around the idea of artificial loneliness" href = "https://github.com/Recondit/B"/>
      </div>
      </center>
      
    </div>

 
    </Animator>
  </ScrollPage>
  
</ScrollContainer >




</div>
</div>
  );
}

export default App;
