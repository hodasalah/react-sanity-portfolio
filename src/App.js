import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar,GoToTop } from "./components";
import "./App.scss";

function App() {
	return (
		<div className="app">
			<GoToTop />
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonial />
			<Footer />
		</div>
	);
}

export default App;
