export type Plano = 'diaria' | 'mensal' | 'anual';

export type Aluno = {
    id: number;
    nome: string;
    status: 'ativo' | 'inativo';
    vencimento: string;
    plano: Plano;
}