import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { AddHospital } from "./pages/AddHospital";
import { Button } from "@/components/ui/button";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/add-hospital" element={<AddHospital />} />
			</Routes>
		</Router>
	);
}

export default App;
