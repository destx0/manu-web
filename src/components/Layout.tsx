import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Hospital, Edit, Pill } from "lucide-react";

export function Layout() {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-indigo-800 text-white py-4">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl font-bold flex items-center justify-center">
						<Hospital className="w-10 h-10 mr-2" />
						Delhi Hospital
					</h1>
					<p className="text-center mt-2">
						Caring for Delhi, One Bed at a Time
					</p>
				</div>
			</header>

			<main className="flex-grow container mx-auto px-4 py-8">
				<Outlet />
			</main>

			<footer className="bg-indigo-800 text-white py-4">
				<div className="container mx-auto px-4 flex justify-between items-center">
					<p>&copy; 2024 Hospital Bed Finder</p>
					<div className="flex space-x-4">
						<Link
							to="/edit-hospitals"
							className="flex items-center hover:text-indigo-200"
						>
							<Edit className="w-5 h-5 mr-1" />
							Edit Departments
						</Link>
						<Link
							to="/medicines"
							className="flex items-center hover:text-indigo-200"
						>
							<Pill className="w-5 h-5 mr-1" />
							Medicines
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
