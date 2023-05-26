import React from "react";
import './App.css';
// import image from './assets/Icon_tickit.png';



const Card = (props) => {

	const divStyle = {
		backgroundImage: `url("${props.image}")`,
	  };

    return ( 
		
        <div class="link-card" style={divStyle}>
	<a class = "test" href= {props.href} target="_blank" rel="noopener noreferrer">
	
	<div class="textbox-name">
				<h2>
					<div class="textbody-name">
						{props.name}
						
					</div>
				</h2>
	</div>
	<div class="textbox-desc">
				<h4>
					<div class="textbody-desc">
						{props.body}
						
					</div>
				</h4>
	</div>
	</a>
</div>
     );
}
 
export default Card;