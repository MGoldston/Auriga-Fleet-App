import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const fleet = [
    { rego: "VH-AAA", model: "EC135 P3H", hours: 720, nextDue: "2025-08-10" },
    { rego: "VH-BBB", model: "AS350 B2", hours: 820, nextDue: "2025-07-05" },
    { rego: "VH-CCC", model: "EC145 D2", hours: 780, nextDue: "2025-06-20" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Auriga Fleet Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Registration</th>
            <th>Model</th>
            <th>Hours</th>
            <th>Next Due</th>
          </tr>
        </thead>
        <tbody>
          {fleet.map((a, i) => (
            <tr key={i}>
              <td>{a.rego}</td>
              <td>{a.model}</td>
              <td>{a.hours}</td>
              <td>{a.nextDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
