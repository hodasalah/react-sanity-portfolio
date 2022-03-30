import {
	About,
	Footer,
	Header,
	Skills,
	Testimonial,
	Work,
	Contact,
} from "./container";
import { Navbar, GoToTop } from "./components";
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
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
