import { DataList } from "./DataList"
import { Input } from "./Input"

const roles = ['Administrador', 'Cajero', 'Mesero', 'Cocinero']

export const Form = () => {
  return (
    <form>
      <Input name="correo electrónico" type="text" placeholder="Ingresa tu correo electrónico" />
      <Input name="contraseña" type="password" placeholder="Ingresa tu contraseña" />
      <DataList data={roles} />
      <span>
        <input type="checkbox" name="remember" /> <label htmlFor="remember">Recordar sesión</label>
        <a href="#">Olvidaste tu contraseña?</a>
      </span>
      <button type="submit">Ingresar al sistema</button>
    </form>
  )
}