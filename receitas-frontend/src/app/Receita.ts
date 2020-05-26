export interface Receita {
  id: number;
  nome: string;
  modoDePreparo: string;
  dificuldade: string;
}

export interface Ingrediente {
  nome: string;
  unidade: string;
  quantidade: string;
}

export interface ReceitaCompleta {
  receita: Receita;
  ingredientes: Ingrediente[];
}
