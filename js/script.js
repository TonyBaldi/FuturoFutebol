import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoNovamente = document.querySelector(".novamente-btn");

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

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcao) {
  const afirmacoes = aleatorio(opcao.afirmacao);
  historiaFinal += afirmacoes + " ";
  if(opcao.proxima != undefined){
    atual = opcao.proxima;
  }
  else{
    mostraResultado();
    return;
  }
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = `Em 2049, ${nome}`;
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  caixaResultado.classList.add("mostrar");
  botaoNovamente.addEventListener("click", jogaNovamente);
}

function jogaNovamente(){
  atual = 0;
  historiaFinal = "";
  caixaResultado.classList.remove("mostrar");
  mostraPergunta();
}

function substituiNome(){
  for(const pergunta of perguntas){
    pergunta.enunciado = pergunta.enunciado.replace(/você/gi, nome);
  }
}

substituiNome();
mostraPergunta();