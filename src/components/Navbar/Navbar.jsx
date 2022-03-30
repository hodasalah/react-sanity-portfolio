import React, { useState, useEffect } from "react";
import Logo from "../logo/logo";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
	const [loc, setLoc] = useState("home");
	const [sticky, setSticky] = useState("");

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setLoc(window.location.hash.slice(1));
			if (window.scrollY > 50) {
				setSticky("sticky");
			} else {
				setSticky("");
				setLoc("home");
			}
		});
	}, []);
	const navItems = [
		"home",
		"about",
		"work",
		"skills",
		"testimonials",
		"contact",
	];
	const [toggle, setToggle] = useState(false);
	return (
		<nav className={`app__navbar ${sticky}`}>
			<div className="app__navbar-logo">
				<Logo />
			</div>
			<ul className="app__navbar-links">
				{navItems.map((item) => (
					<li
						className={`app__flex ${item === loc ? "active" : " "}`}
						key={`link-${item}`}
					>
						<a className="nav-link" href={`#${item}`}>
							{item}
						</a>
					</li>
				))}
			</ul>
			<div className="app__navbar-menu ">
				<HiMenuAlt3 onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div
						className="border-multicolor"
						whileInView={{ x: [250, 0] }}
						transition={{ duration: 0.85, ease: "easeInOut" }}
					>
						<AiFillCloseCircle onClick={() => setToggle(false)} />
						<ul>
							{navItems.map((item) => (
								<li
									className={`app__flex ${
										item === loc ? "active" : " "
									}`}
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
