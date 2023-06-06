import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import styles from './cep.module.css';

const BuscaCep = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  const buscarCep = async () => {
    const buscarCep = cep.replace('-', ''); // Remove o hífen do CEP

    const resposta = await axios.get(`https://viacep.com.br/ws/${buscarCep}/json/`); // Faz a requisição à API dos Correios

    setEndereco(resposta.data); // Setando o objeto em endereço
    setCep('');
  };

  return (
    <div>
      <h1 style={{ color: 'white' }}>Buscar CEP</h1>
      <div>
        <label>
          <Form.Control
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </label>
      </div>

      <Button onClick={buscarCep} variant="secondary">
        Search
      </Button>{' '}
      {endereco && (
        <div>
          <h2 className={styles.titulo}>Endereço encontrado:</h2>
          <div
            style={{
              border: '3px solid white',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '500px',
              margin: '0 auto',
              padding: '10px',
            }}
          >
            <p style={{ color: 'white', fontSize: '25px' }}>
              <b>CEP:</b> {endereco.cep}
            </p>
            <p style={{ color: 'white', border: '1px solid white', borderRadius: '10px' }}>
              <b>Logradouro:</b> {endereco.logradouro}
            </p>
            <p style={{ color: 'white', border: '1px solid white', borderRadius: '10px' }}>
              <b>Bairro:</b> {endereco.bairro}
            </p>
            <p style={{ color: 'white', border: '1px solid white', borderRadius: '10px' }}>
              <b>Cidade:</b> {endereco.localidade}
            </p>
            <p style={{ color: 'white', border: '1px solid white', borderRadius: '10px' }}>
              <b>Estado:</b> {endereco.uf}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuscaCep;
