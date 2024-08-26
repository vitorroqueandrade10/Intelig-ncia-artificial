const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao perceber que a temperatura global continua a aumentar e impactar cada vez mais a agricultura global, qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "demonstrou ter medo das consequências devastadoras para o a agricultura mundial e a sociedade."
            },
            {
                texto: " Isso é um desafio que precisa ser levado a sério!",
                afirmacao: "demonstrou querer ajudar a desenvolver soluções para reduzir as emissões de carbono causadoras dessas mudanças impactantes."
            }
        ]
    },
    {
        enunciado: "Quando você vê notícias sobre a agricultura global sofrendo com tais mudanças climáticas, cada vez mais frequentes, qual é a sua reação?",
        alternativas: [
            {
                texto: " Isso é alarmante!",
                afirmacao: "Mostrou preocupação e certo receio com o futuro da agricultura que pode piorar com as mudanças  e o futuro da agricultura no planeta."
            },
            {
                texto: "Isso é um alerta!",
                afirmacao: " Sentiu a urgência de adotar práticas mais sustentáveis em seu dia a dia para tentar ajudar no combate dessas mudanças . "
            }
        ]
    },
    {
        enunciado: " Ao observar as mudanças climáticas vemos que nossos alimentos também estão mudando, assim como nossa agricultura global ao redor do mundo, qual é a sua opinião?",
        alternativas: [
            {
                texto: " Isso é deprimente!",
                afirmacao: "Lamentou profundamente a perda diária de tantos alimentos."
            },
            {
                texto: "Isso é um chamado à ação!",
                afirmacao: "mostrou-se motivado a participar ativamente para a mudança mundial."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();