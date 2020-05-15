export interface Receita {
    id: number;
    nome: string;
    modo_de_preparo: string;
    dificuldade: string;
}

export interface Ingrediente {
    id: number;
    nome: string;
}

export interface ReceitaCompleta {
    id: number;
    unidade: string;
    quantidade: string;
    receita: Receita;
    ingrediente: Ingrediente;
}
