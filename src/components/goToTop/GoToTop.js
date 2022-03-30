import React, { useState, useEffect } from "react";
import "./GoToTop.scss";
import { AiOutlineArrowUp } from "react-icons/ai";

const GoToTop = (props) => {
	const [scrollPosition, setSrollPosition] = useState(0);
	const [showGoTop, setshowGoTop] = useState("goTopHidden");

	//DISPLAY HANDLER
	const handleVisibleButton = () => {
		const position = window.pageYOffset;
		setSrollPosition(position);

		if (scrollPosition > 50) {
			setshowGoTop("goTop");
		} else if (scrollPosition < 50) {
			setshowGoTop("goTopHidden");
		}
	};
	const handleScrollUp = () => {
		window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
		window.location.hash = "#home";
	};

	//SCROLL LISTENER
	useEffect(() => {
		window.addEventListener("scroll", handleVisibleButton);
	});

	return (
		<div
			className={showGoTop ? "" : "goTopHidden"}
			onClick={handleScrollUp}
		>
			<button className="goTop">
				<AiOutlineArrowUp />
			</button>
		</div>
	);
};

export default GoToTop;
