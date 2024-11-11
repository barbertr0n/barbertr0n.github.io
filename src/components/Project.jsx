import React from 'react';

function Project(props) {
	return (
		<>
			<h3>{props.title}</h3>
			<img id='project-image' src={props.projectImage}></img>
			<p>{props.text}</p>
		</>
	)
};

export default Project;
