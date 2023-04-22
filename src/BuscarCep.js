import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const BuscaCep = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState("");

  const buscarCep = async () => {
    const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`); //fazendo aquisição da api dos correois
    console.log(typeof(resposta))
    setEndereco(resposta.data); //Setando o objeto em endereço
  };

  return (
    <div>
      <h1 style={{color: "white"}}>Buscar CEP</h1>
      <div>
      <label>
      <Form.Control placeholder='CEP' value={cep} onChange={(e) => setCep(e.target.value)} style={{margin: "10px auto"}} />
      </label>
      </div>
    
      <Button onClick={buscarCep} variant="secondary">Search</Button>{' '}
      {endereco && (
        <div>
            { /* Aqui será chamado os atriburos do objeto */}
          <h2 style={{color: "#efefef"}}>Endereço encontrado:</h2>
          <div style={{border: "3px solid black"}}>
          <p style={{color: "white"}}><b>CEP:</b> {endereco.cep}</p>
          <p style={{color: "white"}}><b>Logradouro:</b> {endereco.logradouro}</p>
          <p style={{color: "white"}}><b>Bairro:</b> {endereco.bairro}</p>
          <p style={{color: "white"}}><b>Cidade:</b> {endereco.localidade}</p>
          <p style={{color: "white"}}><b>Estado:</b> {endereco.uf}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuscaCep;
