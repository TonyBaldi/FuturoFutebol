const nomes = ["Eduardo", "Rafael", "João", "Vinicius", "Murilo", "Erick", "Robson"];

export function aleatorio (lista){
  const posicao = Math.floor(Math.random()* lista.length);
  return lista[posicao]
}

export const nome = aleatorio(nomes);