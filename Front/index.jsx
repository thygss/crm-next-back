import React, { useState } from 'react';

const CompromissoForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [salesUser, setSalesUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      salesUser,
    };
    // Send data to Node.js backend API
    fetch('/api/compromisso', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Data:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <br />
      <label>Hora:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <br />
      <label>Usuário Vendedor:</label>
      <select value={salesUser} onChange={(e) => setSalesUser(e.target.value)}>
        {salesUsers.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompromissoForm;