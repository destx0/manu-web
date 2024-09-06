import { Medicine } from '../types/Medicine';

export const dummyMedicines: Medicine[] = [
  { id: 1, name: "Aspirin", amount: 100 },
  { id: 2, name: "Ibuprofen", amount: 50 },
  { id: 3, name: "Paracetamol", amount: 75 },
  { id: 4, name: "Amoxicillin", amount: 30 },
  { id: 5, name: "Omeprazole", amount: 60 },
];

export function loadDummyMedicines(): Medicine[] {
  return dummyMedicines;
}