'use client'; // Diretiva que indica que este é um Client Component

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para navegação

const MyFormComponent = () => {
  const navigate = useNavigate(); // Instanciar useNavigate

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Redirecionar para outra página após o envio do formulário
    navigate('/outra-pagina'); // Substitua '/outra-pagina' pela rota desejada
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;