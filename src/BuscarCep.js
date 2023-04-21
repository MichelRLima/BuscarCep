import React, { useState } from 'react';
import axios from 'axios';
import styles from './BuscarCep.module.css'
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
      <h1>Digite o CEP</h1>
      <div>
      <label>
       
        <input className={styles.input} type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
      </label>
      </div>
      <button className={styles.button}onClick={buscarCep}>Buscar</button>
      {endereco && (
        <div>
            { /* Aqui será chamado os atriburos do objeto */}
          <h2 >Endereço encontrado:</h2>
          <p>CEP: {endereco.cep}</p>
          <p>Logradouro: {endereco.logradouro}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Cidade: {endereco.localidade}</p>
          <p>Estado: {endereco.uf}</p>
        </div>
      )}
    </div>
  );
};

export default BuscaCep;
