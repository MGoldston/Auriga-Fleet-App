import React from "react";

const FleetDashboard = () => {
  const fleet = [
    { rego: "VH-AAA", model: "EC135 P3H", hours: 720, nextDue: "2025-08-10" },
    { rego: "VH-BBB", model: "AS350 B2", hours: 820, nextDue: "2025-07-05" },
    { rego: "VH-CCC", model: "EC145 D2", hours: 780, nextDue: "2025-06-20" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Registration</th>
            <th className="border-b p-2">Model</th>
            <th className="border-b p-2">Hours</th>
            <th className="border-b p-2">Next Due</th>
          </tr>
        </thead>
        <tbody>
          {fleet.map((aircraft, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border-b p-2">{aircraft.rego}</td>
              <td className="border-b p-2">{aircraft.model}</td>
              <td className="border-b p-2">{aircraft.hours}</td>
              <td className="border-b p-2">{aircraft.nextDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FleetDashboard;
