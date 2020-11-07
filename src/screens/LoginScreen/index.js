import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  const [nome, setNome] = useState('');
  const [senhaSignUp, setSenhaSignUp] = useState('');
  const [emailSignUp, setEmailSignUp] = useState('');
  const [foto, setFoto] = useState('');

  const [modalSignUp, setModalSignUp] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, [])

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await api.post('/autenticacao', { login: email, senha });
  //     console.log(response, '****RESPONSE');
  //     console.log(response.token, '****RESPONSE');
      
  //     console.log(token, '******token')
  //     console.log(email)
  //     console.log(senha)
  
  //     if(response.status === 200) {
  //       history.push('/cenario');
  //       setToken(response.data.token);
  //       setLoading(false);
  //       return;
  //     }
  //   } catch(e) {
  //     console.log(e.response)
  //   }
    
  // }

  // const createAccout = async (e) => {
  //   e.preventDefault();
  //   const response = await api.post('/usuarios', {
  //     nome,
  //     email,
  //     foto,
  //     senha
  //   });

  //   if(response.status === 201) {
  //     alert('Cadastro Realizado com sucesso');
  //     history.push('/');
  //     return;
  //   }

  //   alert('Erro no cadastro');
  // }

  const handleSignUp = () => {
    setModalSignUp(true)
  }

  const closeReset = () =>{
    setModalSignUp(null)
  }

  return (
    <>
    
    <div className="loginScreen__container">
      <h1>ECS</h1>
      <section className="login__container">
        <h2>Login</h2>
        
        <input
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <input
          placeholder="Senha"
          type="password"
          name="password"
          value={senha}
          onChange={(e) => { setSenha(e.target.value) }}
        />
        
        <button
          className="button button__login"
          type="button"
          disabled={loading}
          
        >
        
        {loading ? (
          <i className="fas fa-sync-alt fa-spin icon-refresh"></i>
        ): <span><Link to="/cenario">Entrar</Link></span>}
        </button>
        
        <Link to="/password-reset"> Esqueceu a senha?</Link>
        <button className="button button__sign_up" type="button" onClick={handleSignUp}>Criar conta</button>
      </section>
    </div>

    { modalSignUp && <div className="signup__container">
      <span className="close__button" onClick={() => closeReset()}>x</span>
      <h1> Cadastro</h1>
      <h4>Agora vai essa porra</h4>
      <form>
        <input
          placeholder="URL foto"
          name="foto"
          value={foto}
          onChange={(e) => { setFoto(e.target.value) }}
        />

        <input
          placeholder="Nome"
          name="nome"
          value={nome}
          onChange={(e) => { setNome(e.target.value) }}
        />

        <input
          placeholder="Email"
          name="email"
          value={emailSignUp}
          onChange={(e) => { setEmailSignUp(e.target.value) }}
        />

        <input
          placeholder="Senha"
          type="password"
          name="senha"
          value={senhaSignUp}
          onChange={(e) => { setSenhaSignUp(e.target.value) }}
        />
        <button className="button button-login" type="submit">Cadastrar</button>
      </form>
      
    </div>}
    </>
  )
}

export default LoginScreen
