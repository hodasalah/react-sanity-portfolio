import React from "react";
import "./logo.scss";

const Logo = () => {
	return (
		<a className="logo">
			{/* icon  */}
			<svg
				height="22.32"
				viewBox="0 0 30 22.32"
				width="30"
				xmlns="http://www.w3.org/2000/svg"
				aria-label="web.dev"
				role="img"
				className="logo-icon"
			>
				<path
					d="M0 19.28a3 3 0 0 1 3-3h16.27a3.045 3.045 0 0 1 0 6.09H3.04A3 3 0 0 1 0 19.28Z"
					fill="#6cf"
				></path>
				<path
					d="M.89.9a3 3 0 0 1 4.3 0l8.12 8.11a3.05 3.05 0 0 1 0 4.3l-8.12 8.12a3.04 3.04 0 1 1-4.3-4.3l5.6-5.61a.51.51 0 0 0 0-.72L.89 5.22A3 3 0 0 1 .89.9Z"
					fill="#06f"
					fill-rule="evenodd"
				></path>
				<path
					d="m10.39 16.22-5.2 5.2a3.04 3.04 0 1 1-4.3-4.3l.89-.9Z"
					fill="#c6f"
				></path>
				<circle cx="19.27" cy="19.27" fill="#06f" r="3.04"></circle>
			</svg>
			<h3>
				<span>H</span>.S
			</h3>
		</a>
	);
};

export default Logo;
