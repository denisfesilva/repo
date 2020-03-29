import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api';


//Vizual
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './styles.css'



export default function Register() {
    const history = useHistory(); //Responsavel pelo redirecionamento após o preenchimeto dos dados.

    const [name, setName] = useState('');   //useState responsavel por armazenar os dados do front de forma asyncrona 
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(event) {  //Envia os dados para a API
      
        event.preventDefault(); //Previne o redirect automatico

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de Login: ${response.data.id}`);
            history.push('/');
        }
        catch (err) {
            alert('Erro no cadastro, tente novamente.');
            console.log("Erro: ",err);
        }
    }
    return (

        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça o cadastro, entre na plataforma e ajuda pessoas a encontrarem casos da sua ONG</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
            Voltar para o Logon</Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Nome da ONG" required value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" required value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="text" placeholder="WhatsApp" required value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />

                    <div className="input-group">
                        <input type="text" placeholder="Cidade" required value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder="UF" style={{ width: 80 }} required value={uf} onChange={e => setUf(e.target.value)} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}