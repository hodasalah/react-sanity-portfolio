import React from "react";

const NavigationDots = ({ active }) => {
	const navItems = [
		"home",
		"about",
		"work",
		"skills",
		"testimonials",
		"contact",
	];
	return (
		<div className="app__navigation">
			{navItems.map((item, index) => (
				// eslint-disable-next-line jsx-a11y/anchor-has-content
				<a
					className="app__navigation-dot"
					href={`#${item}`}
					key={item + index}
					style={
						active === item ? { backgroundColor: "#dd2d4e" } : {}
					}
				/>
			))}
		</div>
	);
};

export default NavigationDots;
