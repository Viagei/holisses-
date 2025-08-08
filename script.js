const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Chegou sua de escolher seu parceiro pokemon",
        alternativas: [
            {
                texto: "Pikachu",
                afirmacao: " "
            },
            {
                texto: "Eevee",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Parabens pela sua escolha agora voce vai ter que escolher qual sera sua proxima cidade.",
        alternativas: [
            {
                texto: "Santalune,Viola: Líder do ginásio do tipo Inseto.",
                afirmacao: ""
            },
            {
                texto: " Cyllage,Grant: Líder do ginásiodo tipo Pedra.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "No meio do caminho voce encontra dois pokemons, e decide capturar um deles, pois so tem uma pokebola qual voce escolhe captura?",
        alternativas: [
            {
                texto: "Scatterbug(é um Pokémon do tipo Inseto,)",
                afirmacao: ""
            },
            {
                texto: "Fletchling( Pokémon do tipo Normal / Voador)",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "depois de ganhar sua primeira insignia,voce encontra o professor Sycamore, e ele te oferece dois pokemon com mega evoluçao qual voce vai escolher",
        alternativas: [
            {
                texto: "mega metagross",
                afirmacao: ""
            },
            {
                texto: "mega lucario",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "voce continuou sua jornada e chegou no final da liga pokemon, e deve escolher quem voce vai enfrentar",
        alternativas: [
            {
                texto: "Ash",
                afirmacao: ""
            },
            {
                texto: "Red",
                afirmacao: "Parabens voce ganhou a liga e se tornou um mestre pokemon "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
