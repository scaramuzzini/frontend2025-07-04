import './jogo.css'
import { useState } from 'react';

function Quadrado({quad,handleClick}) {
    return <button className='quadrado' 
            onClick={handleClick}>
        {quad}</button>
}

function Tabuleiro() {
    const [vezDoX,setVezDoX] = useState(true);
    const [quadrados, setQuadrados] = useState(Array(9).fill(null));
    
    function handleClickQuad(i) {
        if (quadrados[i] == null) {
            const novosQuadrados = quadrados.slice();
            novosQuadrados[i] = vezDoX ? 'X' : 'O';
            setQuadrados(novosQuadrados);
            setVezDoX(!vezDoX);
        } else {
            alert('movimento invalido!');
        }
    }

    function reiniciarJogo() {
        setQuadrados(Array(9).fill(null));
    }

    return (
        <>
            <button onClick={reiniciarJogo}>Reiniciar o jogo</button>
            <div className='linha'>
                <Quadrado quad={quadrados[0]} handleClick={() => handleClickQuad(0)} />
                <Quadrado quad={quadrados[1]} handleClick={() => handleClickQuad(1)}/>
                <Quadrado quad={quadrados[2]} handleClick={() => handleClickQuad(2)}/>
            </div>
            <div className='linha'>
                <Quadrado quad={quadrados[3]} handleClick={() => handleClickQuad(3)}/>
                <Quadrado quad={quadrados[4]} handleClick={() => handleClickQuad(4)}/>
                <Quadrado quad={quadrados[5]} handleClick={() => handleClickQuad(5)}/>
            </div>
            <div className='linha'>
                <Quadrado quad={quadrados[6]} handleClick={() => handleClickQuad(6)} />
                <Quadrado quad={quadrados[7]} handleClick={() => handleClickQuad(7)} />
                <Quadrado quad={quadrados[8]} handleClick={() => handleClickQuad(8)} />
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