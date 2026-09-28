export const perguntas = [
  // --- NÍVEL 0 ---
  {
    enunciado: "Você acabou de ser aprovado na peneira de um grande clube. Ao entrar no CT pela primeira vez, qual é a sua atitude?",
    alternativas: [
      {
        texto: "Manter a calma, observar a estrutura e agir com cautela.",
        afirmacao: ["Começou sua trajetória com humildade e foco no trabalho coletivo."],
        proxima: 1
      },
      {
        texto: "Chegar com confiança total para mostrar quem manda dentro de campo.",
        afirmacao: ["Iniciou a carreira demonstrando forte personalidade e ambição."],
        proxima: 2
      }
    ]
  },

  // --- NÍVEL 1 ---
  {
    enunciado: "Nos primeiros treinos, qual aspecto do seu futebol você prioriza trabalhar?",
    alternativas: [
      {
        texto: "Aprimorar a visão de jogo e a precisão do passe.",
        afirmacao: ["Desenvolveu uma leitura de jogo apurada e grande controle tático."],
        proxima: 3
      },
      {
        texto: "Focar em manter uma postura discreta e constante sem correr riscos.",
        afirmacao: ["Preferiu a consistência diária sem se expor desnecessariamente."],
        proxima: 4
      }
    ]
  },

  // --- NÍVEL 2 ---
  {
    enunciado: "A comissão técnica exige alta intensidade física nos treinamentos. Como responde?",
    alternativas: [
      {
        texto: "Desafiar os veteranos nos treinos e tentar liderar os testes físicos.",
        afirmacao: ["Sua energia contagiou o ambiente e impôs respeito desde cedo."],
        proxima: 3
      },
      {
        texto: "Focar na sua performance individual para buscar logo uma vaga no ataque.",
        afirmacao: ["Buscou o brilho individual como cartão de visita no clube."],
        proxima: 4
      }
    ]
  },

  // --- NÍVEL 3 (INTERSECÇÃO: Gestão do Vestiário) ---
  {
    enunciado: "O clima no vestiário esquenta após duas derrotas seguidas. Como você se posiciona?",
    alternativas: [
      {
        texto: "Tentar apaziguar os ânimos e unir o grupo em prol do time.",
        afirmacao: ["Mostrou maturidade e ajudou a manter a coesão do elenco em momentos difíceis."],
        proxima: 5
      },
      {
        texto: "Cobrar publicamente maior empenho dos seus companheiros de equipe.",
        afirmacao: ["Sua cobrança direta gerou alguma tensão, mas despertou o espírito competitivo."],
        proxima: 6
      }
    ]
  },

  // --- NÍVEL 4 (INTERSECÇÃO: Mercado de Transferências) ---
  {
    enunciado: "Um olheiro europeu faz uma oferta irrecusável no meio da temporada. Qual é a sua decisão?",
    alternativas: [
      {
        texto: "Aceitar a proposta imediatamente para jogar na Europa.",
        afirmacao: ["A ida precoce para o exterior acelerou seu processo de amadurecimento."],
        proxima: 7
      },
      {
        texto: "Recusar a proposta para buscar o título nacional pelo clube atual.",
        afirmacao: ["Priorizou a lealdade ao projeto do clube e o carinho dos adeptos."],
        proxima: 5
      }
    ]
  },

  // --- NÍVEL 5 (Caminho da Estabilidade/Título) ---
  {
    enunciado: "O time chega ao jogo decisivo do campeonato. Qual estratégia você adota?",
    alternativas: [
      {
        texto: "Servir os companheiros com assistências e defender até o fim.",
        afirmacao: ["Atuou de forma altruísta, colocando os objetivos do time acima dos seus."],
        proxima: 8
      },
      {
        texto: "Chamar a responsabilidade das jogadas individuais na entrada da área.",
        afirmacao: ["Trombou com a defesa adversária buscando decidir a partida sozinho."],
        proxima: 9
      }
    ]
  },

  // --- NÍVEL 6 (Caminho da Crise) ---
  {
    enunciado: "Substituído no meio do jogo por opção tática, como você reage no banco?",
    alternativas: [
      {
        texto: "Aceitar a decisão do técnico e apoiar quem entrou em campo.",
        afirmacao: ["Sua postura profissional no banco preservou a tranquilidade do grupo."],
        proxima: 8
      },
      {
        texto: "Demonstrar insatisfação aberta com a comissão técnica.",
        afirmacao: ["O temperamento forte criou atritos que exigiram pulso firme do clube."],
        proxima: 9
      }
    ]
  },

  // --- NÍVEL 7 (Caminho da Europa) ---
  {
    enunciado: "Chegando ao futebol europeu, você enfrenta o desafio da adaptação ao ritmo do jogo. O que faz?",
    alternativas: [
      {
        texto: "Mudar seu estilo para se encaixar rigidamente no esquema tático local.",
        afirmacao: ["Adaptou seu estilo de jogo às exigências táticas do futebol moderno."],
        proxima: 8
      },
      {
        texto: "Manter seu estilo ousado, mesmo correndo o risco de ir para o banco.",
        afirmacao: ["A recusa em mudar a sua essência manteve o seu estilo único em campo."],
        proxima: 9
      }
    ]
  },

  // --- NÍVEL 8 (DECISÃO FINAL - Finais 1 e 2) ---
  {
    enunciado: "Nos minutos finais da grande decisão, a partida exige um último movimento. Como decide o seu legado?",
    alternativas: [
      {
        texto: "Comandar a linha de passe e garantir a vitória coletiva.",
        afirmacao: ["Consagrou-se como o CAPITÃO LENDÁRIO do clube, erguendo o troféu como maior referência do elenco."],
      },
      {
        texto: "Analisar o jogo com frieza e ditar o ritmo exato da partida.",
        afirmacao: ["Tornou-se o MAESTRO TÁTICO, elogiado por especialistas de todo o mundo pela inteligência ímpar."],
      }
    ]
  },

  // --- NÍVEL 9 (DECISÃO FINAL - Finais 3 e 4) ---
  {
    enunciado: "O momento decisivo exige um lance de pura genialidade sob forte pressão. O que faz?",
    alternativas: [
      {
        texto: "Arriscar um chute no ângulo para decidir a partida e marcar seu nome.",
        afirmacao: ["Emerge como o ASTRO INTERNACIONAL, conquistando os holofotes do futebol mundial e premiações individuais."],
      },
      {
        texto: "Tentar uma jogada individual plástica, ignorando os companheiros livres.",
        afirmacao: ["Ficou marcado como o TALENTO INCOMPREENDIDO, uma estrela brilhante de carreira pontuada por polémicas."],
      }
    ]
  }
];