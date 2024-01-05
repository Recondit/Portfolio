import React from "react";
import './App.css';
// import image from './assets/Icon_tickit.png';



const Card = (props) => {

	const divStyle = {
		backgroundImage: `url("${props.image}")`,
	  };

    return ( 
		
        <div class="link-card" style={divStyle}>
	<a href={props.href} target="_blank" rel="noopener noreferrer">
		
		<div class="blue">
			<div class="textbox">

				<div class="textboxsub">
					
					<h2>
						<div class="textbody">
							{props.title}
						</div>
					</h2>
					<div class="textbody">
						<h4>{props.body}</h4>
					</div>
				</div>
			</div>
		</div>
	</a>
</div>
     );
}
 
export default Card;