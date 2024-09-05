import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { AddHospital } from "./pages/AddHospital";
import { EditHospital } from "./pages/EditHospital";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/add-hospital" element={<AddHospital />} />
				<Route path="/edit-hospitals" element={<EditHospital />} />
			</Routes>
		</Router>
	);
}

export default App;
