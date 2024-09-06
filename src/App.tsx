import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { AddHospital } from "./pages/AddHospital";
import { EditHospital } from "./pages/EditHospital";
import { MedicinePage } from "./pages/MedicinePage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/add-hospital" element={<AddHospital />} />
				<Route path="/edit-hospitals" element={<EditHospital />} />
				<Route path="/medicines" element={<MedicinePage />} />
			</Routes>
		</Router>
	);
}

export default App;
