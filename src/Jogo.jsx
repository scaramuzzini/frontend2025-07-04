import './jogo.css'
import { useState } from 'react';

function Quadrado() {
    const [quad, setQuad] = useState('');
    function handleClick() {
        if (quad == 'X') {
            setQuad('O');
        } else {
            setQuad('X');
        }
    }
    return <button className='quadrado' 
            onClick={handleClick}>
        {quad}</button>
}

function Tabuleiro() {
    return (
        <>
            <div className='linha'>
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
            <div className='linha'>
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
            <div className='linha'>
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
        </>
    )

}


function JogoDaVelha() {
    return (
        <>
            <h1>Jogo da Velha</h1>
            <Tabuleiro />
        </> 
    )
}

export default JogoDaVelha