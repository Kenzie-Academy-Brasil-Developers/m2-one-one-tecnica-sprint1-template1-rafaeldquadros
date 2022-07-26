
const listaDeLivros = [
  {
    nome: "Harry Potter e a Pedra Filosofal",
    anoDePublicacao: 1997,
  },
  {
    nome: "Harry Potter e a Câmara Secreta",
    anoDePublicacao: 1998,
  },
  {
    nome: "Harry Potter e o Cálice de Fogo",
    anoDePublicacao: 2000,
  },
  {
    nome: "Harry Potter e a Ordem da Fênix",
    anoDePublicacao: 2003,
  },
  {
    nome: "Harry Potter e o Prisioneiro de Azkaban",
    anoDePublicacao: 1999,
  },
];


let ulDoHtml = document.querySelector(".container")
ulDoHtml.innerHTML = ""

function adicionarLivros (arr){
    for(let i = 0; i < arr.length; i++){

      let nome = arr[i].nome
      let anoDePublicacao = arr[i].anoDePublicacao

      let liDoLivro = document.createElement("li")
      let nomeDoLivro = document.createElement("p")
      let anoDoLivro  = document.createElement("p")

      if(anoDePublicacao <= 1997){
        liDoLivro.classList.add("destaque")
        nomeDoLivro.innerText  = nome
        anoDoLivro.innerText   = anoDePublicacao
        liDoLivro.appendChild(nomeDoLivro)
        liDoLivro.appendChild(anoDoLivro)
        ulDoHtml.appendChild(liDoLivro)
      }else if(anoDePublicacao >= 2000){
        liDoLivro.classList.add("destaque")
        nomeDoLivro.innerText  = nome
        anoDoLivro.innerText   = anoDePublicacao
        liDoLivro.appendChild(nomeDoLivro)
        liDoLivro.appendChild(anoDoLivro)
        ulDoHtml.appendChild(liDoLivro)
      }else{
        nomeDoLivro.innerText  = nome
        anoDoLivro.innerText   = anoDePublicacao
        liDoLivro.appendChild(nomeDoLivro)
        liDoLivro.appendChild(anoDoLivro)
        ulDoHtml.appendChild(liDoLivro)

      }

    }
}
adicionarLivros(listaDeLivros)