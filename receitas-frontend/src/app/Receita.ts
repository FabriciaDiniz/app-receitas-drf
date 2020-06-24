export interface Receita {
  id: number;
  nome: string;
  categoria: string;
  dificuldade: string;
  ingredientes: Ingrediente[];
  passos: Passo[];
}

export interface Ingrediente {
  id: number;
  nome: string;
  unidade: string;
  quantidade: string;
  substituto: boolean;
  receita: number;
}

export interface Passo {
  id: number;
  ordem: number;
  passo: string;
  receita: number;
}
