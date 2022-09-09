import React from 'react';
import './styles.css';

export function Profile() {
    const Ids = [
        "Net",
        "React",
        "Csharp",
        "Kotlin"
    ];
    var paragrafo1 = "Clique na tecnologia para exibir um texto";
    const data = {
        "React": "Despois de aprender HTML, CSS e JavaScript 'puro' parti para os estudos do React por conta própria.",
        "Csharp": "Estudo C# desde o inicio da minha faculdade em 2019, pois foi a linguagem de programação escolhida pela PUC Minas.",
        "Net": "Tive uma experiência de 1 ano de estágio em que aprendi e utilizei o .NET para construção de API's REST.",
        "Kotlin": "Estudei Kotlin para desenvolver um aplicativo nativo próprio no android"
    }
    function handleTransform(id, box){
        handleTransformIcon(id, box);
        handleTransformText(id);
    }
    function handleTransformText(id){
                paragrafo1 = data[id];
                document.getElementById('box1').innerHTML = paragrafo1;
             
    }
   
    function handleTransformIcon(id, box){
        handleResetIcons();
        document.getElementById(id).style.transform = "scale(1.2)";
        document.getElementById(id).style.transition = "0.3s";
        document.getElementById(box).innerHTML = id;
    }
    function handleResetIcons(){
        Ids.forEach(resetIcons);
    }   
    function resetIcons(item){
        document.getElementById(item).style.transform = "scale(1.0)";
        document.getElementById(item).style.transition = "0.3s";
    }

    return(
        <div className='ProfileContainer'>
            <h1>Principais tecnologias</h1>
            <div className='boxOfImgs'>
                        <img src='csharp.png' id='Csharp' alt='icon Csharp'  onClick={() => handleTransform('Csharp', 'titleTechnologies')}/>
                        <img src='net.png' id='Net' alt='.Net icon' onClick={() => handleTransform("Net", "titleTechnologies")}/>
                        <img src='React.png' id='React' alt='icon React'  onClick={() => handleTransform("React", "titleTechnologies")}/>
                        <img src='kotlin.png' id='Kotlin' alt='icon Kotlin'  onClick={() => handleTransform("Kotlin", "titleTechnologies")}/>
            </div>
            <div className='Profile'>
                <div className='Technologies'>
                    <h1 id="titleTechnologies">Tecnologias</h1>
                    <div className='boxOfP'>
                        <div className='box'>
                            <p id="box1">{paragrafo1}</p>
                        </div>
                    </div>
                    
                
                </div>  
                
            </div>
        </div>
    );

}