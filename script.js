const carta = `Oi, meu amor. Meu Gusta, meu Escrifonia, minha razão, meu bem, minha âncora, minha vida... ❤️

Hoje eu só queria te falar uma coisa que talvez eu não diga o suficiente: eu te amo.

Fiz essa cartinha pensando em você, porque queria que ela fosse um lembrete de que existe alguém aqui que pensa em você com carinho todos os dias.

Gusta, mesmo sem a gente ter se encontrado pessoalmente ainda, você já conquistou um espaço enorme no meu coração. É incrível como alguém consegue trazer tanta paz, tanto carinho e tantos sorrisos mesmo estando do outro lado da tela.

Cada conversa com você deixa meu dia melhor. Cada mensagem, cada risada e cada momento que compartilhamos faz o meu carinho por você crescer ainda mais.

Tem dias em que eu simplesmente paro e penso em como foi bom o destino ter cruzado nossos caminhos. Você apareceu de um jeito tão inesperado, mas hoje é uma das pessoas mais importantes da minha vida.

Mesmo existindo quilômetros entre nós, isso nunca foi capaz de diminuir o que eu sinto. Pelo contrário... cada dia que passa eu descubro mais motivos para admirar você, cuidar de você e querer fazer parte da sua vida.

Eu amo o seu jeitinho, amo conversar com você, amo quando você me faz rir sem nem perceber, amo poder compartilhar meu dia com você e saber que, do outro lado da tela, está alguém que faz meu coração ficar feliz.

Se algum dia você duvidar do quanto é importante, volta aqui e lê essa cartinha de novo.

Porque eu quero que você nunca esqueça que existe uma pessoa que pensa em você antes de dormir, que sorri quando vê uma mensagem sua e que agradece todos os dias por ter conhecido você.

Você se tornou meu lugar seguro, mesmo de longe.

Meu conforto.

Minha paz.

Meu sorriso favorito.

Meu futuro encontro favorito.

E eu espero, de todo o coração, que o dia em que finalmente nos encontrarmos seja ainda mais especial do que todas as vezes em que imaginei esse momento.

Até lá, vou continuar demonstrando meu amor em cada mensagem, em cada cuidado e em cada detalhe, porque você merece sentir o quanto é amado.

Obrigada por existir.

Obrigada por fazer parte da minha vida.

Obrigada por ser você.

Eu te amo hoje.

Vou te amar amanhã.

E vou continuar te amando em todos os dias que ainda estão por vir.

Com todo o meu amor,

Da sua princesa ❤️`;

const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const photo = document.getElementById("photo");
const typing = document.getElementById("typing");
const next = document.getElementById("next");

let i = 0;

envelope.addEventListener("click", () => {
    intro.style.display = "none";
    letter.classList.remove("hidden");
    escrever();
});

function escrever() {
    if (i < carta.length) {
        typing.innerHTML += carta.charAt(i);
        i++;
        setTimeout(escrever, 25);
    }
}

next.addEventListener("click", () => {
    letter.style.display = "none";
    photo.classList.remove("hidden");
    chuvaDeCoracoes();
});

function chuvaDeCoracoes() {
    setInterval(() => {
        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-30px";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.animation = "cair 5s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 180);
}

const style = document.createElement("style");

style.innerHTML = `
@keyframes cair{
0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(120vh) rotate(720deg);
opacity:0;
}
}
`;

document.head.appendChild(style);
