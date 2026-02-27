// VETOR DE OBJETOS

const listaUsuarios =[
    {nome:"Ana", idade: 25},
    {nome:"Bruno", idade: 22},
    {nome:"Carla", idade: 30},
    {nome:"Daniela", idade: 15}
]

console.log("Exibindo todos os usuários de vetor:")
listaUsuarios.forEach(usuario =>{
        console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

console.log("\nFiltrando idade maior que 18 anos:")

    //ADICIONANDO EM NOVA LISTA APENAS MAIORES DE 18 ANOS.

const maioresDe18 = listaUsuarios.filter(
        usuario => usuario.idade > 18
)
//EXIBINDO TODOS OS ELEMENTOS DO VETOR.

maioresDe18.forEach( usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade}`)
)

console.log("\nMostrando apenas nomes:")
const listaDeNomes = listaUsuarios.map(u => u.nome)
listaDeNomes.forEach( nome => console.log (`${nome}`))

console.log("\nEncontrar um usuário: ")
const usuarioEncontrado = listaUsuarios.find(u => u.nome ==="Carla")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)