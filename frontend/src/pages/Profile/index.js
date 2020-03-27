import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';

export default function Profile(){
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    
    //função a ser disparada, array de dependencia 
    useEffect(()=>{
        api.get('profile',{headers:{
            Authorization:ongId
        }}).then(response => {
            setIncidents(response.data);
        }).catch(()=>alert('Ocorreu um erro durante o abastecimento d profile'));
    },[]);

    async function handleDeleteIncidents(id){
        try{
            await api.delete(`/incidents/${id}`, {
                headers:{
                    Authorization: ongId
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(err){
            alert("Erro ao deletar caso, tente novamente.");
        }
    };

    async function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-conteiner">
            <header>
                <img src={LogoImg} alt="Be The Heroes"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button 
                    type="button"
                    onClick={()=>handleLogout()}>
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {
                    incidents.map(incidents => (
                        <li key={incidents.id}>
                            <strong>CASO:</strong>
                            <p>{incidents.title}</p> 
                            <strong>DESCRIÇÃO:</strong>
                            <p>{incidents.description}</p> 
                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(incidents.value)}</p> 
                            <button 
                                type="button" 
                                onClick={
                                    ()=>handleDeleteIncidents(incidents.id)
                                }>
                                <FiTrash2 size={20} color="#a8a8b3"/>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}