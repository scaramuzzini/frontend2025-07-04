import './jogo.css'

function Quadrado() {
    return <button className='quadrado'></button>
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