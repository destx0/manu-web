import { useState, useEffect } from "react";
import { HospitalCard } from "@/components/HospitalCard";

interface Hospital {
  id: string;
  name: string;
  locality: string;
  address: string;
  phone: string;
  availableBeds: number;
  isOpen: boolean;
}

interface HospitalListProps {
  searchQuery: string;
}

export function HospitalList({ searchQuery }: HospitalListProps) {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    // TODO: Implement API call to fetch hospitals based on searchQuery
    // For now, we'll use dummy data with more details
    const dummyHospitals: Hospital[] = [
      { id: "1", name: "City Hospital", locality: "Downtown", address: "123 Main St", phone: "(555) 123-4567", availableBeds: 10, isOpen: true },
      { id: "2", name: "Central Medical", locality: "Midtown", address: "456 Oak Ave", phone: "(555) 987-6543", availableBeds: 5, isOpen: false },
      { id: "3", name: "Suburban Clinic", locality: "Outskirts", address: "789 Pine Rd", phone: "(555) 246-8135", availableBeds: 15, isOpen: true },
    ];
    setHospitals(dummyHospitals);
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hospitals.map((hospital) => (
        <HospitalCard key={hospital.id} hospital={hospital} />
      ))}
    </div>
  );
}