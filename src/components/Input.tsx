export const Input = ({ name = 'input', type = 'text', placeholder = 'Escribe algo...' }) => {
  return (
    <span >
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </span >
  )
}