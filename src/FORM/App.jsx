import React from "react"
import './App.css'

const App = () => {

 const [nome, setNome] = React.useState('')
 const HandleSubmit = (event) => {
  event.preventDefault()
 }

 const [email, setEmail] = React.useState('')

 const [telefone, setTelefone] = React.useState('')

 const [senha, setSenha] = React.useState('')

 return (

  <form onSubmit={HandleSubmit}>
   <label htmlFor="nome" >Nome: </label>
   <input
   required
    autoFocus
    id="nome"
    type="text"
    value={nome}
    onChange={(event) => setNome(event.target.value)}
   />
   <div>{nome}</div>

   <label htmlFor="email" >Email: </label>
   <input
   required
    autoFocus
    id="email"
    type='email'
    value={email}
   onChange={(event) => setEmail(event.target.value)}
   />
   <div>{email}</div>


   <label htmlFor="telefone" >Telefone: </label>
   <input
   maxLength='11'
   required
    autoFocus
    id="telefone"
    type='number'
    value={telefone}
    onChange={(event) => setTelefone(event.target.value)}
   />
   <div>{telefone}</div>

   <label htmlFor="senha" >Senha: </label>
   <input
   maxLength='8'
   required
    autoFocus
    id="senha"
    type='password'
    value={senha}
    onChange={(event) => setSenha(event.target.value)}
   />
   <div>{senha}</div>

   <button>Enviar</button>
  </form>
 )
}

export default App
