import { Medicine } from "../types/Medicine";

export const initialMedicines: Medicine[] = [
	{ id: 1, name: "Aspirin", amount: 100 },
	{ id: 2, name: "Ibuprofen", amount: 50 },
	{ id: 3, name: "Paracetamol", amount: 75 },
	{ id: 4, name: "Amoxicillin", amount: 30 },
	{ id: 5, name: "Omeprazole", amount: 60 },
	{ id: 6, name: "Ciprofloxacin", amount: 40 },
	{ id: 7, name: "Metformin", amount: 120 },
	{ id: 8, name: "Simvastatin", amount: 80 },
	{ id: 9, name: "Lisinopril", amount: 90 },
	{ id: 10, name: "Metoprolol", amount: 55 },
	{ id: 11, name: "Atorvastatin", amount: 100 },
	{ id: 12, name: "Losartan", amount: 45 },
	{ id: 13, name: "Hydrochlorothiazide", amount: 65 },
	{ id: 14, name: "Clopidogrel", amount: 70 },
	{ id: 15, name: "Levothyroxine", amount: 85 },
	{ id: 16, name: "Warfarin", amount: 25 },
	{ id: 17, name: "Pantoprazole", amount: 50 },
	{ id: 18, name: "Amlodipine", amount: 95 },
	{ id: 19, name: "Prednisone", amount: 60 },
	{ id: 20, name: "Azithromycin", amount: 35 },
	{ id: 21, name: "Furosemide", amount: 75 },
	{ id: 22, name: "Alprazolam", amount: 20 },
	{ id: 23, name: "Gabapentin", amount: 110 },
	{ id: 24, name: "Sertraline", amount: 40 },
	{ id: 25, name: "Citalopram", amount: 55 },
	{ id: 26, name: "Tramadol", amount: 30 },
	{ id: 27, name: "Hydrocodone", amount: 25 },
	{ id: 28, name: "Escitalopram", amount: 50 },
	{ id: 29, name: "Fluoxetine", amount: 60 },
	{ id: 30, name: "Doxycycline", amount: 45 },
];

export function loadInitialMedicines(): Medicine[] {
	return initialMedicines;
}
