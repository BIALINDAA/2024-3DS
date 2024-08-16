const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Quem inventou o voleibol?",
        alternativas: [
            {
                texto: "William G. Morgan",
                afirmacao: "William G. Morgan é creditado como o inventor do voleibol em 1895."
            },
            {
                texto: "James Naismith",
                afirmacao: "James Naismith inventou o basquete, não o voleibol."
            }   
        ]
    },
    {
        enunciado: "Qual era o nome original do voleibol?",
        alternativas: [
            {
                texto: "Mintonette",
                afirmacao: "O nome original do voleibol era Mintonette."
            },
            {
                texto: "Volley Ball",
                afirmacao: "O nome Volley Ball foi adotado mais tarde, mas não era o nome original."
            }
        ]
    },
    {
        enunciado: "Quando o voleibol foi incluído nos Jogos Olímpicos?",
        alternativas: [
            {
                texto: "1964",
                afirmacao: "O voleibol foi incluído nos Jogos Olímpicos de Tóquio em 1964."
            },
            {
                texto: "1956",
                afirmacao: "O voleibol não foi incluído nas Olimpíadas até 1964."
            }
        ]
    },
    {
        enunciado: "Qual é o número máximo de jogadores por time em uma partida de voleibol?",
        alternativas: [
            {
                texto: "6",
                afirmacao: "Cada time no voleibol tem um máximo de 6 jogadores em campo durante uma partida."
            },
            {
                texto: "7",
                afirmacao: "Um time de voleibol tem apenas 6 jogadores, não 7."
            }
        ]
    },
    {
        enunciado: "Qual país tem mais títulos olímpicos no voleibol masculino?",
        alternativas: [
            {
                texto: "Brasil",
                afirmacao: "O Brasil é o país com mais títulos olímpicos no voleibol masculino."
            },
            {
                texto: "Estados Unidos",
                afirmacao: "Os Estados Unidos têm menos títulos olímpicos no voleibol masculino em comparação com o Brasil."
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Obrigado por participar do quiz sobre a história do voleibol!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();
