const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo");
console.log(botoes)
for (let i=0;i <botoes.lenght; i++){
    botoes(i).onclik = function() {
    
        for(let j=0;j<botoes.lenght;j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo")
    }
}   
const contadores = document.querySelectorAll("contador");
contadores
