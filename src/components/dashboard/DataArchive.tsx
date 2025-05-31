import React from 'react';
import { Database, FileJson, Search } from 'lucide-react';

const DataArchive: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Data Archive</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <FileJson size={20} />
            Export Data
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg mb-4">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search archives..."
            className="w-full bg-transparent border-none focus:outline-none"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Database className="text-blue-600" size={24} />
              <div>
                <h3 className="font-medium">Threat Intelligence Data</h3>
                <p className="text-sm text-gray-600">Last updated: 2 hours ago</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">View Details</button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Database className="text-blue-600" size={24} />
              <div>
                <h3 className="font-medium">Network Scan Results</h3>
                <p className="text-sm text-gray-600">Last updated: 5 hours ago</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">View Details</button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Database className="text-blue-600" size={24} />
              <div>
                <h3 className="font-medium">OSINT Collection</h3>
                <p className="text-sm text-gray-600">Last updated: 1 day ago</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataArchive;