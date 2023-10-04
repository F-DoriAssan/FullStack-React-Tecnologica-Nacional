import { useState } from 'react'
import './App.css'

const App = () => {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [email, setEmail] = useState();
  const [telefono, setTelefono] = useState();
  const [password, setPassword] = useState();
  const [conPassword, setConPassword] = useState();

  const errorMenssage = validate(nombre, apellido, telefono, password, conPassword);
  return (
    <form 
      onSubmit={ev => {
        ev.preventDefault();

        const nombre = ev.target.nombre.value;
        const apellido = ev.target.apellido.value;
        const email = ev.target.email.value;
        const telefono = ev.target.telefono.value;
        const password = ev.target.password.value;
        const conPassword = ev.target.conPassword.value;

      }}
    >
      <input 
        type="text"
        name='nombre'
        placeholder='Nombre'
        autoComplete='off'
        value={nombre}
        onChange={ev => setNombre(ev.target.value)}
      /> <br />
      <input 
        type="text"
        name='apellido'
        placeholder='Apellido'
        autoComplete='off'
        value={apellido}
        onChange={ev => setApellido(ev.target.value)}
      /> <br />
      <input 
        type="text"
        name='email'
        placeholder='Email@gmail.com'
        autoComplete='off'
        value={email}
        onChange={ev => setEmail(ev.target.value)}
      /> <br />
      <input 
        type="phone"
        name='phone'
        placeholder='Telefono'
        autoComplete='off'
        value={telefono}
        onChange={ev => setTelefono(ev.target.value)}
      /> <br />
      <input 
        type="password"
        name='password'
        placeholder='Contraseña'
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      /> <br />
      <input 
        type="password"
        name='conPassword'
        placeholder='Confirmar Contraseña'
        value={conPassword}
        onChange={ev => setConPassword(ev.target.value)}
      />; <br />
      <p>{errorMenssage}</p>
      <button type='submit' disabled={errorMenssage}>Crear Cuenta</button>
    </form>
  )};


const validate = (nombre, apellido,telefono, password, conPassword) => {
  if((nombre || []).length < 4 ) return 'Nombre Incorrecto ';
  if((apellido || []).length < 4) return 'Apellido Incorrecto ';
  if((telefono || []).length < 4) return 'Telefono Incorrecto ';
  if((password || []).length < 4) return 'Contraseña Incorrecta ';
  if((conPassword || []).length < 4) return 'Confirmacion de Contraseña Incorrecta ';
};
export default App
