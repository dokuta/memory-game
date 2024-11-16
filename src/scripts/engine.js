// pares de cartas de emojis
const emojis = [
    "👽",
    "👽",
    "👻",
    "👻",
    "😈",
    "😈",
    "👹",
    "👹",
    "💀",
    "💀",
    "🧛",
    "🧛",
    "🎃",
    "🎃",
    "🕷️",
    "🕷️"
];

// guarda os pares abertos para comparação
let openCards = [];

// randomizador das cartas, utilizando pesos
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// desenhando os elementos na tela dinamicamente
for (let indexEmojis = 0; indexEmojis < emojis.length; indexEmojis++) {
    // cria um elemento com a tag "div"
    let box = document.createElement("div");

    // associa a classe "item" a essa box
    box.className = "item";

    // faz os elementos da box serem as cartas, com o vetor randomizado
    box.innerHTML = shuffleEmojis[indexEmojis];

    // adiciona o clique
    box.onclick = handleClick;

    // associa a box dinâmica à classe "game"
    document.querySelector(".game").appendChild(box);
}

// ação ao clicar na carta
function handleClick() {
    // selecionando as duas cartas apenas
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    // ativa a comparação das cartas e o tempo de reset
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// comparação das cartas
function checkMatch() {
    // compara as cartas abertas na posição dos seus vetores
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    // resetando o vetor para continuar clicando
    openCards = [];

    // condição de vitória
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Parabéns, você venceu! Dessa vez... 🎃");
    }
}