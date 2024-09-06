import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	MapPin,
	Phone,
	Clock,
	Bed,
	ChevronLeft,
	ChevronRight,
	Car,
} from "lucide-react";

export function HospitalCard({ section }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const images = [section.imageUrl];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % images.length
			);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	return (
		<div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
			<div className="relative">
				<img
					src={images[currentImageIndex]}
					alt={`${section.name} image`}
					className="w-full h-48 object-cover"
				/>
				<button
					onClick={prevImage}
					className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1"
				>
					<ChevronLeft className="w-6 h-6" />
				</button>
				<button
					onClick={nextImage}
					className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1"
				>
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>
			<div className="p-4">
				<h2 className="text-xl font-semibold mb-2">{section.name}</h2>
				<div className="grid grid-cols-2 gap-2 text-sm">
					<p className="flex items-center text-gray-600">
						<MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
						<span className="truncate">{section.locality}</span>
					</p>
					<p className="flex items-center text-gray-600">
						<Phone className="w-4 h-4 mr-1 flex-shrink-0" />
						<span className="truncate">{section.phone}</span>
					</p>
					<p className="flex items-center">
						<Bed className="w-4 h-4 mr-1 flex-shrink-0" />
						<span>
							Beds:{" "}
							<span className="font-bold">
								{section.availableBeds}
							</span>
						</span>
					</p>
					<p className="flex items-center">
						<Clock className="w-4 h-4 mr-1 flex-shrink-0" />
						<span
							className={`font-bold ${
								section.isOpen
									? "text-green-600"
									: "text-red-600"
							}`}
						>
							{section.isOpen ? "Open" : "Closed"}
						</span>
					</p>
					<p className="flex items-center col-span-2">
						<Clock className="w-4 h-4 mr-1 flex-shrink-0" />
						<span>Wait time: {section.waitTime} mins</span>
					</p>
				</div>
				<Button className="w-full mt-4" disabled={!section.isOpen}>
					{section.isOpen ? "Book Bed" : "Unavailable"}
				</Button>
			</div>
		</div>
	);
}
