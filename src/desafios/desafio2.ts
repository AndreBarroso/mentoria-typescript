// Como podemos melhorar o esse código usando TS? 

enum Profissao {
    Padeiro = 'padeiro',
    Atriz = "atriz"
}

interface DadosPessoa {
    nome: String,
    idade: Number,
    profissao: Profissao
}

let pessoa1: DadosPessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz
};

let pessoa2: DadosPessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};

let pessoa3: DadosPessoa = {
        nome: "laura",
        idade: 32,
        profissao: Profissao.Atriz
};

let pessoa4: DadosPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}
