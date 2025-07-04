function MeuApp() {
    return (
        <>
            <h1>Ocean Brasil!!!</h1>
            <p>Esta é uma aula de reactjs</p>
            <BotaoAleatorio />
            <BotaoAleatorio />
            <BotaoAleatorio />
            <BotaoAleatorio />
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
