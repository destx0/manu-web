import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Hospital, MapPin, Phone, Clock, Bed, Image, Car, Home } from 'lucide-react';
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
    distance: '',
    time: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "hospitals"), formData);
      console.log("Document written with ID: ", docRef.id);
      // Reset form after successful submission
      setFormData({
        name: '',
        locality: '',
        phone: '',
        availableBeds: '',
        imageUrl: '',
        distance: '',
        time: '',
        description: '',
      });
      alert("Hospital added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding hospital. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Hospital className="w-8 h-8 mr-2" />
        Add New Hospital
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <Hospital className="w-5 h-5 mr-2 text-gray-500" />
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Hospital Name"
            className="flex-grow"
          />
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-gray-500" />
          <Input
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            placeholder="Locality"
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
        <div className="flex space-x-4">
          <div className="flex items-center flex-1">
            <Car className="w-5 h-5 mr-2 text-gray-500" />
            <Input
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              placeholder="Distance (km)"
              type="number"
              step="0.1"
              className="flex-grow"
            />
          </div>
          <div className="flex items-center flex-1">
            <Clock className="w-5 h-5 mr-2 text-gray-500" />
            <Input
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="Time (mins)"
              type="number"
              className="flex-grow"
            />
          </div>
        </div>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Hospital Description"
          rows={4}
        />
        <Button type="submit" className="w-full">
          Add Hospital
        </Button>
      </form>
      <div className="mt-6 flex justify-between">
        <Button type="submit" className="w-1/3 mr-2">
          Add Hospital
        </Button>
        <Link to="/edit-hospitals" className="w-1/3 mx-2">
          <Button className="w-full" variant="outline">
            Edit Hospitals
          </Button>
        </Link>
        <Link to="/" className="w-1/3 ml-2">
          <Button className="w-full" variant="secondary">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}