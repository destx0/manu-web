import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Minus, Trash2 } from 'lucide-react';
import { loadInitialMedicines } from '@/data/medicineData';
import { Medicine } from '@/types/Medicine';

export function MedicinePage() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [newMedicine, setNewMedicine] = useState({ name: '', amount: 0 });

  useEffect(() => {
    setMedicines(loadInitialMedicines());
  }, []);

  const addMedicine = () => {
    if (newMedicine.name) {
      setMedicines([...medicines, { ...newMedicine, id: Date.now() }]);
      setNewMedicine({ name: '', amount: 0 });
    }
  };

  const removeMedicine = (id: number) => {
    setMedicines(medicines.filter(medicine => medicine.id !== id));
  };

  const updateAmount = (id: number, increment: number) => {
    setMedicines(medicines.map(medicine => 
      medicine.id === id ? { ...medicine, amount: Math.max(0, medicine.amount + increment) } : medicine
    ));
  };

  const editMedicine = (id: number, newName: string) => {
    setMedicines(medicines.map(medicine => 
      medicine.id === id ? { ...medicine, name: newName } : medicine
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Medicine Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              type="text"
              value={newMedicine.name}
              onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
              placeholder="Medicine name"
            />
            <Input
              type="number"
              value={newMedicine.amount}
              onChange={(e) => setNewMedicine({ ...newMedicine, amount: parseInt(e.target.value) || 0 })}
              placeholder="Amount"
            />
            <Button onClick={addMedicine}>
              <Plus className="mr-2 h-4 w-4" /> Add Medicine
            </Button>
          </div>
        </CardContent>
      </Card>

      <ul className="space-y-4">
        {medicines.map(medicine => (
          <Card key={medicine.id}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <Input
                  type="text"
                  value={medicine.name}
                  onChange={(e) => editMedicine(medicine.id, e.target.value)}
                  className="w-48"
                />
                <span className="text-lg font-semibold">Amount: {medicine.amount}</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={() => updateAmount(medicine.id, 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => updateAmount(medicine.id, -1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={() => removeMedicine(medicine.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}