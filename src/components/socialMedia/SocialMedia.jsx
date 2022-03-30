import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<BsTwitter />
			</div>
			<div>
				<BsLinkedin />
			</div>
			<div>
				<BsGithub />
			</div>
		</div>
	);
};

export default SocialMedia;
