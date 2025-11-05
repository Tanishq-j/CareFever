// ...existing code...
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { User, Phone, MapPin, Mail, Calendar, AlertCircle } from "lucide-react";
import SOS from "../components/SOS";
const Dashboard = () => {
    const initialPersonal = {
        name: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        currentLocation: "San Francisco, CA, USA", // dummy default
    };

    const initialEmergency = [
        { name: "", phone: "", relationship: "" },
    
    ];

    const [personalDetails, setPersonalDetails] = useState(initialPersonal);
    const [emergencyContacts, setEmergencyContacts] = useState(initialEmergency);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleEmergencyChange = (index, e) => {
        const { name, value } = e.target;
        setEmergencyContacts((prev) => {
            const copy = [...prev];
            copy[index] = { ...copy[index], [name]: value };
            return copy;
        });
    };

    return (
        <div className="min-h-screen dark:bg-dark-bg bg-light-bg">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-bold text-light-primary-text dark:text-dark-primary-text mb-2">
                        Dashboard
                    </h1>
                    <p className="text-light-secondary-text dark:text-dark-secondary-text">
                        Your personal information and emergency details
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Details + Current Location Card - inputs always editable and required */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-light-surface dark:bg-dark-surface rounded-xl shadow-lg p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-light-primary/20 dark:bg-dark-primary/20 rounded-lg">
                                    <User className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-light-primary-text dark:text-dark-primary-text">
                                    Personal Details
                                </h2>
                            </div>
                            <div className="text-sm text-red-600">
                                * All fields are required
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <User className="h-5 w-5 text-light-secondary dark:text-dark-secondary mt-2" />
                                <div className="flex-1">
                                    <label className="text-sm text-light-secondary-text dark:text-dark-secondary-text">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={personalDetails.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                        aria-required="true"
                                        className="w-full p-2 mt-1 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white border border-light-secondary/20"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-light-secondary dark:text-dark-secondary mt-2" />
                                <div className="flex-1">
                                    <label className="text-sm text-light-secondary-text dark:text-dark-secondary-text">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={personalDetails.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        aria-required="true"
                                        className="w-full p-2 mt-1 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white border border-light-secondary/20"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-light-secondary dark:text-dark-secondary mt-2" />
                                <div className="flex-1">
                                    <label className="text-sm text-light-secondary-text dark:text-dark-secondary-text">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={personalDetails.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        required
                                        aria-required="true"
                                        className="w-full p-2 mt-1 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white border border-light-secondary/20"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Calendar className="h-5 w-5 text-light-secondary dark:text-dark-secondary mt-2" />
                                <div className="flex-1">
                                    <label className="text-sm text-light-secondary-text dark:text-dark-secondary-text">
                                        Age <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={personalDetails.age}
                                        onChange={handleChange}
                                        placeholder="Enter your age"
                                        required
                                        aria-required="true"
                                        className="w-full p-2 mt-1 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white border border-light-secondary/20"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-light-secondary dark:text-dark-secondary mt-2" />
                                <div className="flex-1">
                                    <label className="text-sm text-light-secondary-text dark:text-dark-secondary-text">
                                        Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={personalDetails.address}
                                        onChange={handleChange}
                                        placeholder="Enter your address"
                                        required
                                        aria-required="true"
                                        className="w-full p-2 mt-1 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white border border-light-secondary/20"
                                    />
                                </div>
                            </div>

                            {/* Current Location merged into Personal Details */}
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-light-secondary dark:text-dark-secondary mt-2" />
                                <div className="flex-1">
                                    <label className="text-sm text-light-secondary-text dark:text-dark-secondary-text">
                                        Current Location <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="currentLocation"
                                        value={personalDetails.currentLocation}
                                        onChange={handleChange}
                                        placeholder="Enter your current location"
                                        required
                                        aria-required="true"
                                        className="w-full p-2 mt-1 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white border border-light-secondary/20"
                                    />
                                    <p className="text-xs text-light-secondary-text dark:text-dark-secondary-text mt-1">
                                        You can edit the default location above.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Emergency Contacts Card - inputs always editable */}
                     <SOS/>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;