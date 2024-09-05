import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchBar({ onSearch }) {
	const [query, setQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-2 mb-4">
			<Input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search by locality"
				className="flex-grow"
			/>
			<Button type="submit">Search</Button>
		</form>
	);
}