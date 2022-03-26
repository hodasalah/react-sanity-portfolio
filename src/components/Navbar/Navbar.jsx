import React, { useState } from "react";
import Logo from "../logo/logo";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
	const navItems = ["Home", "About", "Work", "Skills", "Contact"];
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<Logo />
			</div>
			<ul className="app__navbar-links">
				{navItems.map((item) => (
					<li className="app__flex" key={`link-${item}`}>
						<a className="nav-link" href={`#${item}`}>
							{item}
						</a>
					</li>
				))}
			</ul>
			<div className="app__navbar-menu">
				<HiMenuAlt3 onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div
						whileInView={{ x: [250, 0] }}
						transition={{ duration: 0.85, ease: "easeInOut" }}
					>
						<AiFillCloseCircle onClick={() => setToggle(false)} />
						<ul>
							{navItems.map((item) => (
								<li
									className="app__flex"
									key={`${item}`}
									onClick={() => setToggle(false)}
								>
									<a className="nav-link" href={`#${item}`}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
