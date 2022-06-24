enum Faixa {
    Branca,
    Azul,
    Roxa,
    Marrom,
    Preta
    
};

type Atleta = {
    nome: string,
    idade: number,
    peso?: number,
    faixa: Faixa,
    equipe: string
     
}

let pessoa1: Atleta = {
    nome: 'mirelly',
    idade: 28,
    faixa: Faixa.Roxa,
    equipe: "KakoFight" 
    
};

let pessoa2: Atleta = {
    nome: 'will',
    idade: 35,
    faixa: Faixa.Preta,
    equipe: "KakoFight"
};
let pessoa3: Atleta = {
    nome: 'maria',
    idade: 18,
    peso: 60,
    faixa: Faixa.Azul,
    equipe: "KakoFight"
}
