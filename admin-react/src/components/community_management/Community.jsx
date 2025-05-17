import React from 'react';
import './Community.css';

const Community = () => {
  const customers = [
    { name: 'Michael A. Miner', id: '#INV2540', date: '07 Jan, 2023' },
    { name: 'Theresa T. Brose', id: '#INV3924', date: '03 Dec, 2023' },
    { name: 'James L. Erickson', id: '#INV5032', date: '28 Sep, 2023' },
    { name: 'Lily W. Wilson', id: '#INV1695', date: '10 Aug, 2023' },
    { name: 'Sarah M. Brooks', id: '#INV8473', date: '22 May, 2023' },
    { name: 'Joe K. Hall', id: '#INV2150', date: '15 Mar, 2023' },
    { name: 'Ralph Hueber', id: '#INV5636', date: '15 Mar, 2023' },
    { name: 'Sarah Drescher', id: '#INV2940', date: '15 Mar, 2023' },
    { name: 'Leonie Meister', id: '#INV9027', date: '15 Mar, 2023' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">All Customers List</h2>
        <select className="border rounded p-1">
          <option>This Month</option>
        </select>
      </div>
      <table className="w-full bg-white border rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2"><input type="checkbox" /></th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Invoice ID</th>
            <th className="p-2">Due Date</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="border-t">
              <td className="p-2"><input type="checkbox" /></td>
              <td className="p-2 flex items-center">
                <img src={`https://i.pravatar.cc/40?img=${index + 1}`} alt={customer.name} className="w-8 h-8 rounded-full mr-2" />
                {customer.name}
              </td>
              <td className="p-2">{customer.id}</td>
              <td className="p-2">{customer.date}</td>
              <td className="p-2 flex space-x-2">
                <button className="text-blue-500"><span className="sr-only">View</span>👁️</button>
                <button className="text-blue-500"><span className="sr-only">Edit</span>✏️</button>
                <button className="text-red-500"><span className="sr-only">Delete</span>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
        <span>1 2 3</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default Community;