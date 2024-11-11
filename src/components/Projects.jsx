import React from 'react';
import {useState} from 'react';
import Project from './project.jsx';

const Projects = () => {
	const [currentProject, setCurrentProject] = useState('project-1');

	function handleClick() {
		setCurrentProject('changed state');
		console.log(currentProject);
	}

	return (
		<div id='projects-container'>
			<aside id='project-title-container'>
				<div className='project-title' onClick={handleClick} >Project 1</div>
				<div className='project-title'  onClick={handleClick} >Project 2</div>
				<div className='project-title' onClick={handleClick} >Project 3</div>
				<div className='project-title' onClick={handleClick} >Project 4</div>
				<div className='project-title' nClick={handleClick} >Project 5</div>
			</aside>
			<section id='project-info'>
				<Project title="project-1" />
				<Project title={currentProject} />
				<Project title="project-3" />
				<Project title="project-4" />
				<Project title="project-5" />
			</section>
		</div>
	)
};
export default Projects;
