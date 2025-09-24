import styled, { keyframes } from "styled-components";

// Animazione pulsante più morbida
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
`;

// Contenitore del messaggio
const MessageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["success", "error"].includes(prop)
})<{ success?: boolean; error?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1rem 2rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 1.3rem;
  color: ${({ success, error }) => (success ? "#0f9d58" : error ? "#d93025" : "#333")};
  background: ${({ success, error }) =>
    success
      ? "linear-gradient(135deg, #e6f4ea, #c8f0d4)"
      : error
      ? "linear-gradient(135deg, #fce8e6, #f8c5c0)"
      : "#f0f0f0"};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15), inset 0 -2px 5px rgba(0, 0, 0, 0.05);
  animation: ${pulse} 2s infinite;
  text-align: center;
`;

// Icona a sinistra
const Icon = styled.span.withConfig({
  shouldForwardProp: (prop) => !["success", "error"].includes(prop)
})<{ success?: boolean; error?: boolean }>`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ success, error }) => (success ? "#0f9d58" : error ? "#d93025" : "#333")};
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
`;

type StatusMessageProps = {
  success?: boolean;
  error?: boolean;
  name?: string;
  surname?: string;
};

export const StatusMessage = ({ success, error, name, surname }: StatusMessageProps) => {
  if (!success && !error) return null;

  return (
    <MessageContainer success={success} error={error}>
      <Icon success={success} error={error}>
        {success ? "✅" : "❌"}
      </Icon>
      {success
        ? `${name} ${surname}, hai confermato con successo! 🎉`
        : "Errore: non è stato possibile confermare la tua presenza."}
    </MessageContainer>
  );
};
