import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { HospitalList } from "./components/HospitalList";

export function HomePage() {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (query) => {
		setSearchQuery(query);
		// TODO: Implement API call to fetch hospitals based on the query
	};

	return (
		<div>
			<SearchBar onSearch={handleSearch} />
			<HospitalList searchQuery={searchQuery} />
		</div>
	);
}