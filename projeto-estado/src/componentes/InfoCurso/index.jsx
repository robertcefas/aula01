import { useState } from "react";
import './style.css'

function InfoCurso() {
    const[nome, setNome] = useState("Progamação de aplicativos")
    const[cargaHoraria, setcargaHoraria] = useState(90)
    const[local, setLocal] = useState("SENAI")

    return (
        <div className='info-curso'>
            <h2>Dados do Curso: </h2>
            <p>Nome: {nome}</p>
            <p>Carga horária: {cargaHoraria}</p>
            <p>Local: {local}</p>
        </div>
    )
}
export default InfoCurso