import React from 'react';
import './styles.css';

export function Profile() {
    const Ids = [
        "GitHub",
        "React",
        "Csharp",
        "Html",
        "Css",
        "JavaScript"
    ];

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
            <h1>Meu Perfil</h1>
            <div className='box1'>
                        <img src='csharp.png' id='Csharp' alt='icon Csharp'  onClick={() => handleTransformIcon("Csharp", "titleTechnologies")}/>
                        <img src='React.png' id='React' alt='icon React'  onClick={() => handleTransformIcon("React", "titleTechnologies")}/>
                        <img src='html.png' id='Html' alt='icon HTML'  onClick={() => handleTransformIcon("Html", "titleTechnologies")}/>
                        <img src='css.png' id='Css' alt='CSS icon' onClick={() => handleTransformIcon("Css", "titleTechnologies")}/>
                        <img src='github.png' id='GitHub' alt='github icon' onClick={() => handleTransformIcon("GitHub", "titleTechnologies")}/>
                        <img src='js.png' id='JavaScript' alt='JavaScript icon' onClick={() => handleTransformIcon("JavaScript", "titleTechnologies")}/>
                    </div>
            <div className='Profile'>
                <div className='Technologies'>
                    <h1 id="titleTechnologies">Tecnologias</h1>
                    <div className='boxOfP'>
                        <p>Conhecimento Acadêmico</p>
                        <p>Conhecimento Prático</p>
                        <p>Número de Projetos</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );

}