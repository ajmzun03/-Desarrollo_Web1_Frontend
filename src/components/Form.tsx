import { Checkbox } from "./Checkbox";
import { DataList } from "./DataList";
import { Input } from "./Input";

const roles = ['Administrador', 'Cajero', 'Mesero', 'Cocinero'];

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Correo electrónico"
        name="email"
        type="email"
        placeholder="Ingresa tu correo electrónico"
      />
      <Input
        label="Contraseña"
        name="password"
        type="password"
        placeholder="Ingresa tu contraseña"
      />

      <DataList data={roles} />

      <div className="form__remember">
        <Checkbox
          label="Recordar sesión"
          name="remember" />
        <a href="#reset-password">¿Olvidaste tu contraseña?</a>
      </div>

      <button type="submit">Ingresar al sistema</button>
    </form>
  );
};