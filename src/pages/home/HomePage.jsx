import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { HospitalList } from "./components/HospitalList";
import { Hospital, Plus, Edit } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (query) => {
		setSearchQuery(query);
		// TODO: Implement API call to fetch hospitals based on the query
	};

	return (
		<div className="min-h-screen py-8 flex flex-col">
			<div className="container mx-auto px-16 flex-grow">
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
			<footer className="bg-indigo-800 text-white py-4 mt-8 -mb-8">
				<div className="container mx-auto px-4 flex justify-between items-center">
					<p>&copy; 2023 Hospital Bed Finder</p>
					<div className="flex space-x-4">
						<Link
							to="/add-hospital"
							className="flex items-center hover:text-indigo-200"
						>
							<Plus className="w-5 h-5 mr-1" />
							Add Hospital
						</Link>
						<Link
							to="/edit-hospitals"
							className="flex items-center hover:text-indigo-200"
						>
							<Edit className="w-5 h-5 mr-1" />
							Edit Hospitals
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
