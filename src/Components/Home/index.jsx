import React, { useEffect } from 'react';
import './styles.css';


export function Home() {
  useEffect(() => {
      const titulo = document.querySelector('.HomeTitle');
      typeWriter(titulo);
      function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        for(let i = 0; i < textoArray.length; i++) {
        setTimeout(() => elemento.innerHTML += textoArray[i], 80 * i);
      }
    }
  },[])
    return(
        <div className='Home'>
            <img className='imgNotebook' src='pc.png' alt='Imagem de um notebook'/>
            <h1 className='HomeTitle'>Bem vindo ao meu Site Portfólio.</h1>
        </div>
    );


}

