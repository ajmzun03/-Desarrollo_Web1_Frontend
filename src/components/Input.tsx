import { useId } from 'react';

export const Input = ({ name = 'input', type = 'text', placeholder = 'Escribe algo...' }) => {
  const inputId = useId(); // Genera un ID único para evitar duplicados en la página

  return (
    <div className="input--group">
      <label htmlFor={inputId}>{name}</label>
      <input id={inputId} type={type} name={name} placeholder={placeholder} />
    </div>
  );
};