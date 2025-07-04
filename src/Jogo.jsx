import './jogo.css'

function Tabuleiro() {
    return (
        <>
            <div className='linha'>
                <button className='quadrado'>1</button>
                <button className='quadrado'>2</button>
                <button className='quadrado'>3</button>
            </div>
            <div className='linha'>
                <button className='quadrado'>1</button>
                <button className='quadrado'>2</button>
                <button className='quadrado'>3</button>
            </div>
            <div className='linha'>
                <button className='quadrado'>1</button>
                <button className='quadrado'>2</button>
                <button className='quadrado'>3</button>
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