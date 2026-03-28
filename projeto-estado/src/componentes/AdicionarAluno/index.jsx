import { useActionState, useState } from 'react'
import './style.css'

function AdicionarAluno() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [aluno, setAlunos] = useState([])
    
    //Função para adicionar um aluino na lista
    const handleAdicionarAluno = (event) => {
        event.preventDefault() //Impede que a página seja recarregada.

        // Se os campos estiverem oreenchidos...
        if (nome && email) {
            setAlunos([...setAlunos, {nome,email}]) //Adiciona na lista
            setNome ("") // Apaga o nome informado deixando o campo vazio
            setEmail ("") // Apaga o e-mail informado deixando o campo vazio
        }
    }

    return (
        <div>
            <h2>Adicionar Aluno:</h2>

            <form onSubmit={handleAdicionarAluno}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">
                    Adicionar
                </button>
            </form>
            <hr />
            <h2>Alunos Adicionado</h2>
            <ul>
                {setAlunos.map((aluno, index) => (
                    <li key={index}>
                        {aluno.nome} - {aluno.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdicionarAluno