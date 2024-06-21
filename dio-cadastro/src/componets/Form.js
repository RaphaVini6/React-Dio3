import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer>
      <Title>Cadastro</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          name="nome"
        />
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <Input
          type="password"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          name="senha"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </FormContainer>
  );
};

export default Form;
