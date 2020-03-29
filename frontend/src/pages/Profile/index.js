import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>

                <img src={logo} alt="Be The Hero" />
                <span>Bem vinda, (ONG) </span>

                <Link to="/incidents/new" className="button" >Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 195,50</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 195,50</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
                </li><li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 195,50</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
                </li><li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 195,50</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
                </li>
            </ul>

        </div>
    );
}