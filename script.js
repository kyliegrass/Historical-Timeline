import React from 'react';
import { Calendar, Clock, Globe } from 'lucide-react';

const TimeTravelExplorer = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-4">Journey Through Time</h1>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Calendar className="text-blue-500 w-6 h-6 mr-2" />
            <span className="font-semibold">Select Date:</span>
          </div>
          <input type="date" className="p-2 border rounded-lg" />
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Clock className="text-green-500 w-6 h-6 mr-2" />
            <span className="font-semibold">Time Period:</span>
          </div>
          <select className="p-2 border rounded-lg">
            <option>Prehistory</option>
            <option>Antiquity</option>
            <option>Medieval</option>
            <option>Modern</option>
            <option>Contemporary</option>
          </select>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Globe className="text-red-500 w-6 h-6 mr-2" />
            <span className="font-semibold">Region:</span>
          </div>
          <select className="p-2 border rounded-lg">
            <option>Global</option>
            <option>Europe</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Africa</option>
          </select>
        </div>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
          Explore
        </button>
      </div>
    </div>
  );
};

export default TimeTravelExplorer;
