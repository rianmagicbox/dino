import { useState, useEffect } from "react";
import personagem from "../IMG/personagem.gif";
import cacto from "../IMG/cacto.png";

import "../styles/Game.css"

function Game(){
    let [start, setStart] = useState([false]);
    let [jump, setJump] = useState([false]);
    let [pass, setPass] = useState([false]);
    let [score, setScore] = useState(0);
    
    function handleClick(){
        setStart(start ? false : true);
    }

    useEffect(()=>{
        const personagem = document.querySelector(".personagem");
        const cacto = document.querySelector(".cacto");
        
        let loop = setInterval(()=>{
            let coordsPersonagem = personagem.getBoundingClientRect();
            let coordsCacto = cacto.getBoundingClientRect();
            if(
                coordsCacto.left <= coordsPersonagem.right - 5 && 
                coordsCacto.right > coordsPersonagem.left + 20 &&
                coordsCacto.top < coordsPersonagem.bottom
            ){
                clearInterval(loop);
                setTimeout(()=>location.reload(), 2000);
            }
        }, 100);
        document.addEventListener("keydown", (e)=>{
            if(e.key === " " && jump === false){
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
        });
    }, []);

    return(
        <section>
            <div className="game-board">
                <img className={start ? "cacto cacto-animation" : "cacto"} src={cacto} alt="deu ruim" />
                <img className={jump? "jump personagem-run" : "personagem-run"} src={personagem} alt="deu ruim"/>
            </div>
        </section>
    )
}
export default Game;