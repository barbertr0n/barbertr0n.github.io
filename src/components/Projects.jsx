import React from 'react';
import { useState } from 'react';
import Project from './project.jsx';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';
import Project5 from '../assets/Project5.png';

const Projects = () => {
	const Project1Info = 'Project 1 information';

	const [currentProject, setCurrentProject] = useState('Project 1');
	const [currentProjectImage, setCurrentProjectImage] = useState(Project1);
	const [currentProjectText, setCurrentProjectText] = useState(Project1Info);

	function handleClick(name, img) {
		setCurrentProject(name);
		setCurrentProjectImage(img);
		getJSON(name);
	}

	function getJSON(name) {
		fetch('project-info.json')
		.then((res) => res.json())
		.then((data) => {
			setCurrentProjectText(data[name])})
	}

	return (
		<div id="projects-container">
			<aside id="project-title-container">
				<div className="project-title" onClick={() => handleClick('Project 1', Project1)}>
					Project 1
				</div>
				<div className="project-title" onClick={() => handleClick('Project 2', Project2)}>
					Project 2
				</div>
				<div className="project-title" onClick={() => handleClick('Project 3', Project3)}>
					Project 3
				</div>
				<div className="project-title" onClick={() => handleClick('Project 4', Project4)}>
					Project 4
				</div>
				<div className="project-title" onClick={() => handleClick('Project 5', Project5)}>
					Project 5
				</div>
			</aside>
			<section id="project-info">
				<Project title={currentProject} projectImage={currentProjectImage} text={currentProjectText} />
			</section>
		</div>
	);
};
export default Projects;
