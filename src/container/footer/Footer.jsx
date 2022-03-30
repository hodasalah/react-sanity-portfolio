import React from "react";
import { motion } from "framer-motion";
import "./Footer.scss";
const Footer = () => {
	return (
		<motion.div
			whileInView={{ opacity: [0, 1] }}
			transition={{ duration: 0.5, type: "ease" }}
			className="app__footer"
		>
			<p className="p-text">Copyright 2022 Hodasalah All Rights Reserved.</p>
		</motion.div>
	);
};

export default Footer;
