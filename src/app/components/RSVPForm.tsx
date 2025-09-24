"use client";

import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
`;

const Button = styled.button`
  padding: 0.85rem 1.5rem;
  border-radius: 20px;
  border: none;
  background: linear-gradient(45deg, #ff69b4, #ff1493, #ff85b1, #ff69b4);
  background-size: 400% 400%;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 5px 15px rgba(255, 20, 147, 0.4);
  transition: all 0.3s ease;
  animation: gradientAnimation 8s ease infinite;

  &:hover {
    transform: scale(1.1) rotate(-1deg);
    box-shadow: 0 10px 25px rgba(255, 20, 147, 0.7), 0 0 20px rgba(255, 105, 180, 0.6);
  }

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;


const RSVPForm = () => {
  return (
    <Container>
      <Link href="/form" passHref>
        <Button>📬 Compila il form 🖋️</Button>
      </Link>
    </Container>
  );
};

export default RSVPForm;
