import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

//Icons
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">

            <section className="form">
                <img src={logo} alt="Be The Hero" />

                <form action="POST">

                    <h1>Faça seu Login</h1>
                    <input type="text" name="id" id="id" placeholder="Seu ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link  className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastrado</Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" />

        </div>
    );
}