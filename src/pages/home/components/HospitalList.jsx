import { HospitalCard } from "./HospitalCard";
import { hospitalSections } from "@/data/dummyData";

export function HospitalList() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{hospitalSections.map((section) => (
				<HospitalCard key={section.id} section={section} />
			))}
		</div>
	);
}