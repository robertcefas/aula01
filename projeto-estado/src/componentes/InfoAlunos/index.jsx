import './style.css'

function InfoAluno() {
    const nome= "Robert Cefas"
    const idade= 20
    const curso= "Desenvolvimento de Sistemas"

    return(
        <div className='info-aluno'>
            <h2>Informações do aluno:</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>
        </div>
    )
}
export default InfoAluno