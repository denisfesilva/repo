import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './styles.css';

export default function (){
    return (
        <div className="new-incident">
        <div className="content">
            <section>
                <img src={logo} alt="Be The Hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói, para resolver isso.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041" />Voltar para Home</Link>
            </section>
            <form action="">
                <input placeholder="Título do caso" />
                <textarea placeholder="Descrição"></textarea>
                <input type="text" placeholder="Valor em reais" />
                <button className="button" type="submit">Cadastrar</button>

            </form>
        </div>
    </div>
    );
}