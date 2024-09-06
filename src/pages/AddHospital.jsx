import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Hospital, MapPin, Phone, Clock, Bed, Image, Home } from 'lucide-react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';
import { Link } from 'react-router-dom';

export function AddHospital() {
  const [formData, setFormData] = useState({
    name: '',
    locality: '',
    phone: '',
    availableBeds: '',
    imageUrl: '',
    waitTime: '',
    isOpen: true,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "hospitalSections"), formData);
      console.log("Document written with ID: ", docRef.id);
      setFormData({
        name: '',
        locality: '',
        phone: '',
        availableBeds: '',
        imageUrl: '',
        waitTime: '',
        isOpen: true,
      });
      alert("Hospital section added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding hospital section. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Hospital className="w-8 h-8 mr-2" />
        Add New Hospital Section
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <Hospital className="w-5 h-5 mr-2 text-gray-500" />
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Section Name"
            className="flex-grow"
          />
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-gray-500" />
          <Input
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            placeholder="Floor"
            className="flex-grow"
          />
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-gray-500" />
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="flex-grow"
          />
        </div>
        <div className="flex items-center">
          <Bed className="w-5 h-5 mr-2 text-gray-500" />
          <Input
            name="availableBeds"
            value={formData.availableBeds}
            onChange={handleChange}
            placeholder="Available Beds"
            type="number"
            className="flex-grow"
          />
        </div>
        <div className="flex items-center">
          <Image className="w-5 h-5 mr-2 text-gray-500" />
          <Input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="flex-grow"
          />
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 mr-2 text-gray-500" />
          <Input
            name="waitTime"
            value={formData.waitTime}
            onChange={handleChange}
            placeholder="Wait Time (mins)"
            type="number"
            className="flex-grow"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isOpen"
            checked={formData.isOpen}
            onChange={handleChange}
            className="mr-2"
          />
          <label>Is Open</label>
        </div>
        <Button type="submit" className="w-full">
          Add Hospital Section
        </Button>
      </form>
      <div className="mt-6 flex justify-between">
        <Link to="/edit-hospitals" className="w-1/2 mr-2">
          <Button className="w-full" variant="outline">
            Edit Hospital Sections
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