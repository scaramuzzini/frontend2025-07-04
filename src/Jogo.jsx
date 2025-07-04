import './jogo.css'
import { useState } from 'react';

function Quadrado({quad,handleClick}) {
    return <button className='quadrado' 
            onClick={handleClick}>{quad}</button>
}

function verificarVencedor(q) {
    /* AND (E)
        V e V = V
        V e F = F
        F e V = F
        F e F = F
        */

    const combinacoesVencedoras = [    
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [6, 4, 2]
    ];

    for (let i=0; i < combinacoesVencedoras.length; i++) {
        const [pa, pb, pc] = combinacoesVencedoras[i];
        if (q[pa] && q[pa] == q[pb] && q[pb] == q[pc]) {
            return q[pa];
        }
    }

    return null;
}

function Tabuleiro() {
    const [vezDoX,setVezDoX] = useState(true);
    const [quadrados, setQuadrados] = useState(Array(9).fill(null));
    
    function handleClickQuad(i) {
        if (verificarVencedor(quadrados) || quadrados[i]) {
            return;
        }
        const novosQuadrados = quadrados.slice();
        novosQuadrados[i] = vezDoX ? 'X' : 'O';
        setQuadrados(novosQuadrados);
        setVezDoX(!vezDoX);
    }

    function reiniciarJogo() {
        setQuadrados(Array(9).fill(null));
        setVezDoX(true);
    }

    

    let vencedor = verificarVencedor(quadrados);
    let mensagem;
    if (vencedor) {
        mensagem = 'O vencedor é '+vencedor;
    } else {
        mensagem = 'Vez do Jogador:' + (vezDoX ? 'X' : 'O')
    }

    return (
        <>
            <h2>{mensagem}</h2>
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