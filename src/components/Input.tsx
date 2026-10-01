import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useId, useState } from 'react';

export const Input = ({ name = 'input', type = 'text', placeholder = 'Escribe algo...' }) => {
  const inputId = useId(); // Genera un ID único para evitar duplicados en la página

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input--group">
      <label htmlFor={inputId}>{name}</label>
      <span className="input--icon">
        {type === 'password' && <Lock />}
        {type === 'email' && <Mail />}
        <input id={inputId} type={type} name={name} placeholder={placeholder} />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </span>
    </div >
  );
};