import { useState } from 'react';

const CompromissoForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [salesUser, setSalesUser] = useState('');
  const [salesUsers, setSalesUsers] = useState([
    { id: 1, name: 'Usuário 1' },
    { id: 2, name: 'Usuário 2' },

  ]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const addUser = (newUser) => {
    setSalesUsers([...salesUsers, newUser]);
  };

  
  const handleAddUser = () => {
    const newUser = { id: 3, name: 'Novo Usuário' }; // Este seria o novo usuário coletado de algum formulário ou lógica específica
    addUser(newUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!date || !time || !salesUser) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');

    const formData = {
      date,
      time,
      salesUser,
    };

    try {
      const response = await fetch('http://localhost:3001/api/compromisso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSuccessMessage('Dados enviados com sucesso!');
      console.log(data);
    } catch (error) {
      setErrorMessage(`Erro ao enviar dados: ${error.message}`);
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Data:</label>
        <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <br />
        <label htmlFor="time">Hora:</label>
        <input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        <br />
        <label htmlFor="salesUser">Usuário Vendedor:</label>
        <select id="salesUser" value={salesUser} onChange={(e) => setSalesUser(e.target.value)} required>
          {salesUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default CompromissoForm;