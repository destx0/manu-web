import { HospitalCard } from "./HospitalCard";
import { hospitals } from "@/data/dummyData";

export function HospitalList() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{hospitals.map((hospital) => (
				<HospitalCard key={hospital.id} hospital={hospital} />
			))}
		</div>
	);
}