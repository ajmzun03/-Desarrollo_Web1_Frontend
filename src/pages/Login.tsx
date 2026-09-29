import { Form } from "../components/Form";
import '../styles/login.css'

export default function Login() {
  return (
    <section className='login'>
      <h2>Iniciar sesión</h2>
      <p>Ingresa tus credenciales para continuar</p>
      <Form></Form>
      <p>COPAC v2.4 · © 2024 Sistema Empresarial · Todos los derechos reservados</p>
    </section>
  )
}