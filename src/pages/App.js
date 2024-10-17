import React, { useState, useEffect } from 'react';
import gitLogo from '../assets/github26.png';
import InputUser from '../components/inputUser';
import InputRepositorio from '../components/inputRepositorio';
import Button from '../components/button';
import ItemRepo from '../components/itemRepo';

import { api } from '../services/api';

import { Container } from './styles';

function App() {
  const [user, setUser] = useState('');
  const [reposi, setReposi] = useState('');
  const [currentRepos, setCurrentRepos] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {


    try {
      const { data } = await api.get(`repos/${user}/${reposi}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setUser('');
          setReposi('');
        } else {
          alert('Repositório já existente na lista');
        }
      } else {
        alert('Repositório não encontrado');
      }
    } catch (error) {
      console.error('Error fetching repository:', error); 
      alert('Erro ao buscar repositório. Verifique a conexão com a internet.'); 
    } 
  };

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  };

  useEffect(() => {
    setCurrentRepos(`${user}/${reposi}`);
  }, [user, reposi]);

  return (
    <div className="App">
      <Container>
        <img src={gitLogo} width={200} height={200} alt="github" />
        <InputUser value={user} onChange={(e) => setUser(e.target.value)} label="Usuário:" />
        <InputRepositorio value={reposi} onChange={(e) => setReposi(e.target.value)} label="Repositório:" />
        <Button onClick={handleSearchRepo}>
        </Button>
        {repos.map((repo) => (
          <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />
        ))}
      </Container>
    </div>
  );
}

export default App;