import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { EditHospital } from "./pages/EditHospital";
import { MedicinePage } from "./pages/MedicinePage";
import { Layout } from "./components/Layout";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/edit-hospitals" element={<EditHospital />} />
					<Route path="/medicines" element={<MedicinePage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
