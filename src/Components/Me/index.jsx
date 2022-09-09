import React from 'react';
import './styles.css';


export function Me() {
  
    return(
        <div className='containerMe'>
            <div className='Me'>
                <div className='MeText'>
                    <h1 className='MeTitle'>Prazer, Luca</h1>
                    <p>Sou uma pessoa apaixonada pela área de tecnologia, estou sempre buscando aprimorar meus conhecimentos e habilidades. 
                    <br/>No momento, estou cursando o oitavo semestre do bacharelado em Sistemas de Informação pela PUC Minas e buscando oportunidades como Desenvolvedor Júnior.
                    </p>
                </div>
                <img className='imgMe' src='fotoeu.png' alt='Foto minha com cabelo escuro e curto'/>
            </div>
            <div className='contact'>
                <a href='https://www.linkedin.com/in/lucamesquita/'><img src='linkedin.png' alt='icone Linkedin'/></a>
                <a href='https://github.com/lucamesquitaa'><img src='github.png' alt='icone GitHub'/></a>
                <a href='https://wa.me/5531995082716'><img src='whatsapp.png' alt='icone Whatsapp'/></a>
            </div>
        </div>
    );


}

