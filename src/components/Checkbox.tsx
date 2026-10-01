// Checkbox.jsx
import { useId } from 'react';

export const Checkbox = ({ label, name, checked, onChange }) => {
  const inputId = useId();

  return (
    <div className="checkbox--group">
      <label htmlFor={inputId}>
        <input
          id={inputId}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};