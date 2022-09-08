import React from 'react';
import './styles.css';

export function Profile() {
    const Ids = [
        "Java",
        "React",
        "Csharp",
        "Html",
        "Css",
        "JavaScript"
    ];
    var paragrafo1 = "a";
    const data = {
        "React": "a",
        "Css": "d",
        "Html": "g",
        "Csharp": "j",
        "Java": "m",
        "JavaScript": "p",
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
            <h1>Meu Perfil</h1>
            <div className='boxOfImgs'>
                        <img src='csharp.png' id='Csharp' alt='icon Csharp'  onClick={() => handleTransform('Csharp', 'titleTechnologies')}/>
                        <img src='React.png' id='React' alt='icon React'  onClick={() => handleTransform("React", "titleTechnologies")}/>
                        <img src='java.png' id='Java' alt='Java icon' onClick={() => handleTransform("Java", "titleTechnologies")}/>
                        <img src='html.png' id='Html' alt='icon HTML'  onClick={() => handleTransform("Html", "titleTechnologies")}/>
                        <img src='css.png' id='Css' alt='CSS icon' onClick={() => handleTransform("Css", "titleTechnologies")}/>
                        <img src='js.png' id='JavaScript' alt='JavaScript icon' onClick={() => handleTransform("JavaScript", "titleTechnologies")}/>
                        
                        
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