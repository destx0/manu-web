import { useState } from "react";
import "./App.css";
import { SearchBar } from "@/components/SearchBar";
import { HospitalList } from "@/components/HospitalList";
import { Hospital } from "lucide-react";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		// TODO: Implement API call to fetch hospitals based on the query
	};

	return (
		<div className="min-h-screen  py-8">
			<div className="container mx-auto px-4">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-indigo-800 flex items-center justify-center">
						<Hospital className="w-10 h-10 mr-2" />
						Hospital Bed Finder
					</h1>
					<p className="text-gray-600 mt-2">
						Find available hospital beds in your area
					</p>
				</header>
				<SearchBar onSearch={handleSearch} />
				<HospitalList searchQuery={searchQuery} />
			</div>
		</div>
	);
}

export default App;
