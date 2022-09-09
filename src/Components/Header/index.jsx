import React from 'react';
import './styles.css';


export function Header() {

    window.onscroll = function() {myFunction()};

    function myFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector(".Header").style = "position: static";
            //document.querySelector(".Header").style.transition = "0.4s";
        } else {
            document.querySelector(".Header").style = "position: sticky";
        }
    }

    return(
        <div className='Header'>
            <h1>Luca Albuquerque Mesquita</h1>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Perfil</a></li>
                <li><a href=''>Tecnologias</a></li>
                <li><a href=''>Projetos</a></li>
            </ul>
        </div>
    );


}

