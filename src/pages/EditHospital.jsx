import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Hospital, MapPin, Phone, Clock, Bed, Image, Car, Trash2, Home, Plus } from 'lucide-react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase';
import { Link } from 'react-router-dom';

export function EditHospital() {
  const [sections, setSections] = useState([]);
  const [editingSection, setEditingSection] = useState(null);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    const querySnapshot = await getDocs(collection(db, "hospitalSections"));
    const sectionList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setSections(sectionList);
  };

  const handleEdit = (section) => {
    setEditingSection(section);
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setEditingSection({ ...editingSection, [e.target.name]: value });
  };

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, "hospitalSections", editingSection.id), editingSection);
      setEditingSection(null);
      fetchSections();
      alert("Hospital section updated successfully!");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("Error updating hospital section. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this hospital section?")) {
      try {
        await deleteDoc(doc(db, "hospitalSections", id));
        fetchSections();
        alert("Hospital section deleted successfully!");
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Error deleting hospital section. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Hospital className="w-8 h-8 mr-2" />
        Edit Hospital Sections
      </h1>
      {editingSection ? (
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className="space-y-4">
          <div className="flex items-center">
            <Hospital className="w-5 h-5 mr-2 text-gray-500" />
            <Input
              name="name"
              value={editingSection.name}
              onChange={handleChange}
              placeholder="Section Name"
              className="flex-grow"
            />
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-gray-500" />
            <Input
              name="locality"
              value={editingSection.locality}
              onChange={handleChange}
              placeholder="Floor"
              className="flex-grow"
            />
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2 text-gray-500" />
            <Input
              name="phone"
              value={editingSection.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="flex-grow"
            />
          </div>
          <div className="flex items-center">
            <Bed className="w-5 h-5 mr-2 text-gray-500" />
            <Input
              name="availableBeds"
              value={editingSection.availableBeds}
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
              value={editingSection.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="flex-grow"
            />
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-gray-500" />
            <Input
              name="waitTime"
              value={editingSection.waitTime}
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
              checked={editingSection.isOpen}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Is Open</label>
          </div>
          <Button type="submit" className="w-full">Update Hospital Section</Button>
          <Button type="button" onClick={() => setEditingSection(null)} variant="outline" className="w-full mt-2">Cancel</Button>
        </form>
      ) : (
        <>
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id} className="flex justify-between items-center border-b pb-2">
                <span>{section.name}</span>
                <div>
                  <Button onClick={() => handleEdit(section)} className="mr-2">Edit</Button>
                  <Button onClick={() => handleDelete(section.id)} variant="destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
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
        </>
      )}
    </div>
  );
}