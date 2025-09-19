"use client";

import { useState } from "react";
import styled from "styled-components";
import { Message } from "./Home";


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 15px;
  background: linear-gradient(135deg, #ffe6f0, #fff0f5);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 1);
  transition: all 0.3s ease;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 2px solid #ffb6c1;
  outline: none;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    border-color: #ff1493;
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 2px solid #ffb6c1;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #ff1493;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: none;
  background-color: #ff1493;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 20, 147, 0.4);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(255, 20, 147, 0.6);
  }
`;

const SuccessMessage = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  color: #ff1493;
  text-align: center;
  font-size: 1.2rem;
`;

const RSVPForm = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [menu, setMenu] = useState<string>("Standard");
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, surname, menu }),
    });

    setConfirmed(true);
  };

  if (confirmed)
    return (
      <SuccessMessage>
        {name} {surname}, sono felice che ci sarai! 🎉
      </SuccessMessage>
    );

  return (
    <Form onSubmit={handleSubmit}>
      <Message>Compila il form 🖋️</Message>
      <Input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <Input type="text" placeholder="Cognome" value={surname} onChange={(e) => setSurname(e.target.value)} required />
      <Select value={menu} onChange={(e) => setMenu(e.target.value)}>
        <option value="Standard">Standard</option>
        <option value="Vegetariano">Vegetariano</option>
        <option value="Vegano">Vegano</option>
        <option value="Senza glutine">Senza glutine</option>
        <option value="Latticini free">Latticini free</option>
        <option value="Keto">Keto</option>
        <option value="Bambini">Bambini</option>
      </Select>
      <Button type="submit">Conferma la tua presenza</Button>
    </Form>
  );
};

export default RSVPForm;
