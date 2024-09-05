import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Bed } from "lucide-react";

interface HospitalCardProps {
  hospital: {
    name: string;
    locality: string;
    address: string;
    phone: string;
    availableBeds: number;
    isOpen: boolean;
  };
}

export function HospitalCard({ hospital }: HospitalCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
      <h2 className="text-2xl font-semibold mb-2">{hospital.name}</h2>
      <div className="space-y-2 mb-4">
        <p className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          {hospital.locality}, {hospital.address}
        </p>
        <p className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-2" />
          {hospital.phone}
        </p>
        <p className="flex items-center">
          <Bed className="w-4 h-4 mr-2" />
          Available Beds: <span className="font-bold ml-1">{hospital.availableBeds}</span>
        </p>
        <p className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Status:{" "}
          <span className={`font-bold ml-1 ${hospital.isOpen ? "text-green-600" : "text-red-600"}`}>
            {hospital.isOpen ? "Open" : "Closed"}
          </span>
        </p>
      </div>
      <Button className="w-full" disabled={!hospital.isOpen}>
        {hospital.isOpen ? "Book Bed" : "Unavailable"}
      </Button>
    </div>
  );
}