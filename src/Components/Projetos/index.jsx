import React from 'react';
import './styles.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

export function Projetos() {

    const slideImages = [
  {
    url: 'site1.png',
    caption: 'Slide 1'
  },
  {
    url: 'projeto2.png',
    caption: 'Slide 2'
  }
];
    return(
        <div className='ProjetosContainer'>
            <h1>Meus Projetos</h1>
            
        </div>
    );
}

