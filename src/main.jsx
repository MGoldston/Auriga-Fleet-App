import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const fleet = [
    { rego: "VH-AAA", model: "EC135 P3H", hours: 720, nextDue: "2025-08-10" },
    { rego: "VH-BBB", model: "AS350 B2", hours: 820, nextDue: "2025-07-05" },
    { rego: "VH-CCC", model: "EC145 D2", hours: 780, nextDue: "2025-06-20" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Auriga Fleet Dashboard</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Registration</th>
            <th className="px-4 py-2 text-left">Model</th>
            <th className="px-4 py-2 text-left">Hours</th>
            <th className="px-4 py-2 text-left">Next Due</th>
          </tr>
        </thead>
        <tbody>
          {fleet.map((a, i) => (
            <tr key={i} className="hover:bg-gray-100">
              <td className="border-t px-4 py-2">{a.rego}</td>
              <td className="border-t px-4 py-2">{a.model}</td>
              <td className="border-t px-4 py-2">{a.hours}</td>
              <td className="border-t px-4 py-2">{a.nextDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
