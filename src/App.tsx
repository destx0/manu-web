import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { AddHospital } from "./pages/AddHospital";
import { Button } from "@/components/ui/button";

function App() {
	return (
		<Router>
			<div className="container mx-auto p-4">
				<nav className="mb-4">
					<Link to="/">
						<Button variant="outline" className="mr-2">Home</Button>
					</Link>
					<Link to="/add-hospital">
						<Button variant="outline">Add Hospital</Button>
					</Link>
				</nav>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/add-hospital" element={<AddHospital />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
