import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Hospital, MapPin, Phone, Clock, Bed, Image, Car, Trash2, Home, Plus } from 'lucide-react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase';
import { Link } from 'react-router-dom';

export function EditHospital() {
  const [hospitals, setHospitals] = useState([]);
  const [editingHospital, setEditingHospital] = useState(null);

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    const querySnapshot = await getDocs(collection(db, "hospitals"));
    const hospitalList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setHospitals(hospitalList);
  };

  const handleEdit = (hospital) => {
    setEditingHospital(hospital);
  };

  const handleChange = (e) => {
    setEditingHospital({ ...editingHospital, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, "hospitals", editingHospital.id), editingHospital);
      setEditingHospital(null);
      fetchHospitals();
      alert("Hospital updated successfully!");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("Error updating hospital. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this hospital?")) {
      try {
        await deleteDoc(doc(db, "hospitals", id));
        fetchHospitals();
        alert("Hospital deleted successfully!");
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Error deleting hospital. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Hospital className="w-8 h-8 mr-2" />
        Edit Hospitals
      </h1>
      {editingHospital ? (
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className="space-y-4">
          {/* Add form fields similar to AddHospital component */}
          {/* ... */}
          <Button type="submit" className="w-full">Update Hospital</Button>
          <Button type="button" onClick={() => setEditingHospital(null)} variant="outline" className="w-full mt-2">Cancel</Button>
        </form>
      ) : (
        <>
          <ul className="space-y-4">
            {hospitals.map((hospital) => (
              <li key={hospital.id} className="flex justify-between items-center border-b pb-2">
                <span>{hospital.name}</span>
                <div>
                  <Button onClick={() => handleEdit(hospital)} className="mr-2">Edit</Button>
                  <Button onClick={() => handleDelete(hospital.id)} variant="destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between">
            <Link to="/add-hospital" className="w-1/3 mr-2">
              <Button className="w-full" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Hospital
              </Button>
            </Link>
            <Link to="/" className="w-1/3 ml-2">
              <Button className="w-full" variant="secondary">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}