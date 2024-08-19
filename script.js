const frases = [
    {
    frase: "A persistência é o caminho do êxito.",
    autor: "Charles Chaplin",
    },
    {
    frase: "A única forma de fazer um grande trabalho é amar o que se faz.",
    autor: "Steve Jobs",
    },
    {
    frase: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    autor: "Robert Collier",
    },
    {
    frase:
    "O fracasso é a oportunidade de começar de novo, com mais experiência.",
    autor: "Henry Ford",
    },
    {
    frase: "Não espere por oportunidades, crie você mesmo as suas.",
    autor: "Autor desconhecido",
    },
    {
    frase:
    "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
    autor: "Zig Ziglar",
    },
    {
    frase:
    "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
    autor: "Winston Churchill",
    },
    {
    frase:
    "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
    autor: "Winston Churchill",
    },
    {
    frase: "Acredite em si próprio e todo o resto virá naturalmente.",
    autor: "Elon Musk",
    },
    {
    frase:
    "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
    autor: "Autor desconhecido",
    },
]
  const frasetext = document.querySelector(" .text")
  const fraseautor = document.querySelector(".autor")
  const fraseBtn = document.querySelector(".button")
function gerarfrase() {
      const index= Math.floor(Math.random() * frases.length)
      frasetext.textContent = frases[index].frase
      fraseautor.textContent = frases[index].autor
      
}
fraseBtn.addEventListener("click", gerarfrase)