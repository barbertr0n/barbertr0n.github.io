import { Link } from "react-scroll";

const Navbar = () => {
	return (
		<>
		<ul>
			<li><Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
			<li><Link to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link></li>
			<li><Link to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></li>
			<li><Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
		</ul>
		</>
	)
};
export default Navbar;
