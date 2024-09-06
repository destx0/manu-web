import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Hospital, MapPin, Phone, Clock, Bed, Image, Car, Trash2, Home, Plus } from 'lucide-react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { hospitalSections } from "@/data/dummyData";

export function EditHospital() {
  const [hospitals, setHospitals] = useState(hospitalSections);
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (hospital) => {
    setEditingId(hospital.id);
  };

  const handleSave = (id, updatedData) => {
    setHospitals(hospitals.map(hospital => 
      hospital.id === id ? { ...hospital, ...updatedData } : hospital
    ));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setHospitals(hospitals.filter(hospital => hospital.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center">
          <Hospital className="w-8 h-8 mr-2" />
          Edit Hospital Sections
        </h1>
        <div className="flex space-x-2">
          <Link to="/add-hospital">
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Hospital Section
            </Button>
          </Link>
          <Link to="/">
            <Button variant="secondary">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        {hospitals.map(hospital => (
          <div key={hospital.id} className="border p-4 rounded-lg">
            {editingId === hospital.id ? (
              <EditForm hospital={hospital} onSave={handleSave} />
            ) : (
              <>
                <h3 className="font-bold text-xl mb-2">{hospital.name}</h3>
                <p className="flex items-center mb-1"><MapPin className="w-4 h-4 mr-2" />{hospital.locality}</p>
                <p className="flex items-center mb-1"><Phone className="w-4 h-4 mr-2" />{hospital.phone}</p>
                <p className="flex items-center mb-1"><Bed className="w-4 h-4 mr-2" />Available Beds: {hospital.availableBeds}</p>
                <p className="flex items-center mb-1"><Clock className="w-4 h-4 mr-2" />Wait Time: {hospital.waitTime} mins</p>
                <p className="flex items-center mb-1"><Image className="w-4 h-4 mr-2" />{hospital.imageUrl}</p>
                <p className="mb-2">Status: {hospital.isOpen ? 'Open' : 'Closed'}</p>
                <div className="mt-2">
                  <Button onClick={() => handleEdit(hospital)} className="mr-2" variant="outline">Edit</Button>
                  <Button onClick={() => handleDelete(hospital.id)} variant="destructive">Delete</Button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-between">
        <Link to="/add-hospital" className="w-1/2 mr-2">
          <Button className="w-full" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Hospital Section
          </Button>
        </Link>
        <Link to="/" className="w-1/2 ml-2">
          <Button className="w-full" variant="secondary">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

function EditForm({ hospital, onSave }) {
  const [formData, setFormData] = useState(hospital);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(hospital.id, formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Section Name"
      />
      <Input
        name="locality"
        value={formData.locality}
        onChange={handleChange}
        placeholder="Floor/Location"
      />
      <Input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <Input
        name="availableBeds"
        value={formData.availableBeds}
        onChange={handleChange}
        type="number"
        placeholder="Available Beds"
      />
      <Input
        name="waitTime"
        value={formData.waitTime}
        onChange={handleChange}
        type="number"
        placeholder="Wait Time (minutes)"
      />
      <Input
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="isOpen"
            checked={formData.isOpen}
            onChange={(e) => setFormData(prev => ({ ...prev, isOpen: e.target.checked }))}
            className="mr-2"
          />
          Is Open
        </label>
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  );
}