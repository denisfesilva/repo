import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

export default function Profile() {

    const history = useHistory();
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            },
        }).then(response => {       //Como não estou utilizando o ( async / await ), tenho que utilizar o (then)
            setIncidents(response.data);
        });
    }, [ongId]);

    async function handleDeleteIncidents(id) {       //Deletar
        /*
            ****IMPORTANTE***: Devera ser utilizado () => handleDeleteIncidents(incident.id), na tag OnClick, caso seja utilizado somente 
            a função handleDeleteIncidents(incident.id), ao carregar a pagina será deletado todos os incidents.


        */
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(incident => incident.id != id)); //Faço uma varedura no array de incidents e mantenho apenas os que tem id diferente do que cliquei para remover
        } catch (error) {

        }
    }

    function handleLogOut(){
        localStorage.clear();
        history.push('/');
    }




    return (
        <div className="profile-container">
            <header>

                <img src={logo} alt="Be The Hero" />
                <span>Bem vinda, {ongName} </span>

                <Link to="/incidents/new" className="button" >Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogOut}>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (      //Retorna conteudo JSX

                    <li key={incident.id}>

                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button type="button"><FiTrash2 size={20} color="#a8a8b3" onClick={() => handleDeleteIncidents(incident.id)} /></button>
                    </li>
                ))}
            </ul>

        </div>
    );
}