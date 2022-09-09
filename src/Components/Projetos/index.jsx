import React from 'react';
import './styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function Projetos(props) {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
  };
    return(

          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={false}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className='item'>
              <h1>API REST em .NET</h1>
              <a href='https://github.com/lucamesquitaa/EcommerceAPI'><img src='projeto1.png' alt="O primeiro projeto é uma API REST"/></a>
              <p>Desenvolvi uma API REST que possui todos os métodos CRUD, pensada para um Ecommerce ficticio</p>
              <a href='https://github.com/lucamesquitaa/EcommerceAPI'>
              <div className='button'>
                <p>Link no GitHub</p>
              </div>
              </a>
            </div>
            <div className='item'>
              <h1>Jogo de truco em C#</h1>
              <a href='https://github.com/lucamesquitaa/JogoDeTruco'><img src='projeto2.png' alt="O segundo projeto é um jogo de truco no console"/></a>
              <p>Desenvolvi um projeto em C# baseado no jogo de cartas Truco</p>
              <a href='https://github.com/lucamesquitaa/JogoDeTruco'>
              <div className='button'>
                <p>Link no GitHub</p>
              </div>
              </a>
            </div>
            <div className='item'>
              <h1>Aplicativo em Kotlin</h1>
              <a href='https://github.com/lucamesquitaa/ControleDeGastosKotlin'><img src='projeto3.png' alt="O terceiro projeto é um aplicativo de controle de gastos"/></a>
              <p>Desenvolvi um aplicativo feito com Kotlin para celulares Android</p>
              <a href='https://github.com/lucamesquitaa/ControleDeGastosKotlin'>
              <div className='button'>
                <p>Link no GitHub</p>
              </div>
              </a>
            </div>
          </Carousel>
  
    );
}


