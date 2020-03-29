import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api';


//Visual
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const history = useHistory();
    const [id, setId] = useState('');

    async function handleRequest(event) {
        event.preventDefault();

   

        try {
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');

        } catch (error) {
            alert('Erro ao efetuar login, tente novamente.');
        }

    }

    return (
        <div className="logon-container">

            <section className="form">
                <img src={logo} alt="Be The Hero" />

                <form onSubmit={handleRequest}>

                    <h1>Faça seu Login</h1>
                    <input  placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastrado</Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" />

        </div>
    );
}