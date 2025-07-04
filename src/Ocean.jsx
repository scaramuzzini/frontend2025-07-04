import { useState } from 'react';

function MeuApp() {
    const [contador,setContador] = useState(0);

    return (
        <>
            <h1>Ocean Brasil!!!</h1>
            <p>Esta é uma aula de reactjs</p>
            <p>Você clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 10)}>
                Somar 10
            </button>
        </>
    )
}

function BotaoAleatorio() {
    return (
        <button onClick={() => console.log('Botão clicado!!!')}>
            Clique
        </button>
    )
}

export default MeuApp;
