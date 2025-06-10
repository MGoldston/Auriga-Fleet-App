
import React, { useState } from 'react';

const helicopters = [
  { rego: 'VH-8Z3' }, { rego: 'VH-8Z4' }, { rego: 'VH-8Z9' },
  { rego: 'VH-DBJ' }, { rego: 'VH-DKA' }, { rego: 'VH-XU8' },
  { rego: 'VH-XU9' }, { rego: 'VH-XUV' }, { rego: 'VH-ZFD' },
  { rego: 'VH-ZFM' }, { rego: 'VH-ZGH' }, { rego: 'VH-ZGP' }, { rego: 'VH-ZGZ' },
];

const bases = [
  'Karratha', 'Port Headland', 'Mackay', 'Hay Point', 'Gladstone', 'Newcastle', 'Other'
];

export default function App() {
  const [selectedBase, setSelectedBase] = useState('');
  const [selectedRego, setSelectedRego] = useState('');
  const [status, setStatus] = useState('');
  const [note, setNote] = useState('');
  const [log, setLog] = useState([]);

  const handleSubmit = () => {
    const newEntry = {
      base: selectedBase,
      rego: selectedRego,
      status,
      note,
      timestamp: new Date().toLocaleString()
    };
    setLog(prev => [...prev, newEntry]);
    setSelectedRego('');
    setStatus('');
    setNote('');
  };

  return (
    <div className="p-6">
      <select value={selectedBase} onChange={(e) => setSelectedBase(e.target.value)}>
        <option value="">Select Base</option>
        {bases.map(base => <option key={base}>{base}</option>)}
      </select>

      <select value={selectedRego} onChange={(e) => setSelectedRego(e.target.value)}>
        <option value="">Select Helicopter</option>
        {helicopters.map(h => <option key={h.rego}>{h.rego}</option>)}
      </select>

      <button onClick={() => setStatus('online')}>Online</button>
      <button onClick={() => setStatus('offline')}>Offline</button>

      {status === 'offline' && (
        <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Notes" />
      )}

      <button onClick={handleSubmit}>Submit</button>

      <div>
        {log.map((entry, idx) => (
          <div key={idx}>
            <strong>{entry.rego}</strong> - {entry.status} at {entry.base} ({entry.timestamp})
            {entry.note && <div>Note: {entry.note}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
