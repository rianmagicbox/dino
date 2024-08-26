import { useState, useEffect } from "react";
import personagem from "./IMG/personagem.gif";
import cacto from "./IMG/cacto.png";
import nuvem from "./IMG/nuvem.png";
import "./Game.css"
import GameOver from "./IMG/GameOver.png";

function Game(){
    let [start, setStart] = useState(false);
    let [jump, setJump] = useState(false);
    let [pass, setPass] = useState(false);
    let [score, setScore] = useState(0);
    
    function handleClick(){
        setStart(start ? false : true);
    }
    function handleTouch(){
        const personagem = document.querySelector(".personagem-run");
        const cacto = document.querySelector(".cacto");
        pulo(personagem, cacto);
    }
    function pulo(personagem, cacto){
        console.log(start);
        if (start == true) {
            console.log("start=true");
            setJump(jump = true);

            setTimeout(()=>{
                setJump(jump = false);
                let coordsPersonagem = personagem.getBoundingClientRect();
                let coordsCacto = cacto.getBoundingClientRect();
    
                if(coordsCacto.right <= coordsPersonagem.left - 5){
                    setPass(pass = true);
                    if(pass){
                        setScore(score += 1);
                        setPass(pass = false);
                    }
                }
            }, 1000);
        }      
    }

    useEffect(()=>{
        const personagem = document.querySelector(".personagem-run");
        const cacto = document.querySelector(".cacto");
        const nuvem = document.querySelector(".nuvem");
        const restart = document.querySelector(".restart");

        let loop = setInterval(()=>{
            let coordsPersonagem = personagem.getBoundingClientRect();
            let coordsCacto = cacto.getBoundingClientRect();
            let coordsNuvem = nuvem.getBoundingClientRect();
            if(
                coordsCacto.left <= coordsPersonagem.right - 5 && 
                coordsCacto.right > coordsPersonagem.left + 20 &&
                coordsCacto.top < coordsPersonagem.bottom
            ){
                nuvem.style.animation = "none";
                nuvem.style.right = `${coordsNuvem.right}px`;

                cacto.style.animation = "none";
                cacto.style.left = `${coordsCacto.left}px`;

                personagem.style.animation = "none";
                personagem.style.right = `${coordsPersonagem.right}px`;
                personagem.style.top = `${coordsPersonagem.bottom + window.pageYoffset - 248}px`;

                personagem.src = GameOver;
                personagem.style.width = "100px";
                personagem.style.height = "120px";

                clearInterval(loop);
                restart.style.display = "flex";
                setTimeout(()=>location.reload(), 2000);
            }
        }, 100);
        document.addEventListener("keydown", (e)=>{
            if(e.key === " "){
                console.log("pulo space");
                pulo(personagem, cacto);
            }
        });
    }, []);

    return(
        <section>
            <div className="game-board" onClick={handleTouch}>
                <img className={start ? "cacto cacto-animation" : "cacto"} src={cacto} alt="deu ruim" />
                <img className={jump? "jump personagem-run" : "personagem-run"} src={personagem} alt="deu ruim"/>
                <img className={start? "nuvem nuvem-animation" : "nuvem"} src={nuvem} alt="deu ruim"/>
                <h2 className="score2"> X</h2>
                <h2 className="score">{score}</h2>
                <div className={start? "start-active": "start"}>
                    <button className="start-button" onClick={handleClick}>Start</button>
                </div>
                <div className="restart">
                    <h3 className="game-over">Game Over</h3>
                </div>
            </div>
        </section>
    )
}
export default Game;