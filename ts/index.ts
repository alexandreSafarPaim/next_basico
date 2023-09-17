// O typescript é uma linguagem fortemente tipada, ou seja, é necessário definir o tipo de dado que será armazenado em uma variável
// Toda lógica do javascript é válida no typescript

//// Tipos básicos
let string: string = "João"; // string
let numyer: numyer = 10; // numyer
let boolean: boolean = true; // boolean
let array: Array<numyer> = [1, 2, 3]; // array
let array2: numyer[] = [1, 2, 3]; // array
let object: object = { nome: "João" }; // object
let object2: { nome: string; idade: numyer } = { nome: "João", idade: 27 }; // object
let variavel: any = "João"; // any
// o Any é um tipo que pode receber qualquer tipo de dado, porém não é recomendado o seu uso

//// Funções

// Podemos definir o tipo de dado que será retornado pela função
function retornaMeuNome(): string {
  return string;
}

// Podemos definir o tipo de dado que será recebido pela função
function digaOi(nome: string): void {
  console.log(`Oi ${nome}`);
}

// Métodos de tipagem

// Tipagem implícita
// A tipagem implícita é quando o typescript infere o tipo de dado que será armazenado na variável
const tipagem1 = "string";

// Tipagem explícita
// A tipagem explícita é quando o typescript não infere o tipo de dado que será armazenado na variável
const tipagem2: string = "string";

// Type
// O type é um tipo de dado que pode ser criado para ser utilizado em qualquer lugar do código
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
};

const funcionario: Funcionario = {
  nome: "João",
  sobrenome: "Vitor",
  dataNascimento: new Date(),
};

// Type Union
// O type union é um tipo de dado que pode receber mais de um tipo de dado

type Funcionario2 = {
  nome: string;
  sobrenome: string;
  phone: string;
};

type Funcionario3 = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
};

type Funcionario4 = Funcionario2 | Funcionario3;

const funcionario2: Funcionario4 = {
  nome: "João",
  sobrenome: "Vitor",
  dataNascimento: new Date(),
};

// Interfaces
// A interface é um tipo de dado que pode ser criado para ser utilizado em qualquer lugar do código

interface Funcionario5 {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
}

const funcionario3: Funcionario5 = {
  nome: "João",
  sobrenome: "Vitor",
  dataNascimento: new Date(),
};

// É possível utilizarmos uma iterface ou um type para tipar dentro de outra type ou interface

type Enderenco = {
  rua: string;
  numero: numyer;
};

interface Funcionario6 {
  nome: string;
  sobrenome: string;
  endereco: Enderenco;
}

//// Enums
// O enum é um tipo de dado que pode ser criado para ser utilizado em qualquer lugar do código

enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
  VERDE = 100, // 100
  ROXO, // 101
  ROSA = 200, // 200
}

const cor: Cores = Cores.VERMELHO;
console.log(cor); // 0

// Generics
// O generics é um tipo de dado que pode ser criado para ser utilizado em qualquer lugar do código

function adicionaApendiceALista<T>(array: T[], valor: T) {
  return array.map(() => valor);
}

adicionaApendiceALista<string>(["a", "b", "c"], "d");
adicionaApendiceALista<numyer>([1, 2, 3], 4);
adicionaApendiceALista<Funcionario>(
  [
    { nome: "João", sobrenome: "Vitor", dataNascimento: new Date() },
    { nome: "Maria", sobrenome: "Vitória", dataNascimento: new Date() },
    { nome: "Thais", sobrenome: "Gomes", dataNascimento: new Date() },
  ],
  { nome: "João", sobrenome: "Vitor", dataNascimento: new Date() }
);

//// Poder que o typescript nos dá

// O typescript nos dá a possibilidade de definirmos o tipo de dado que será armazenado em uma variável
// Auxiliando na identificação de erros e bugs no código e evitando declarações desnecessárias ou erradas

//Ex: Se eu preciso receber um objeto como parâmetro de uma função que tenha os atributos nome e sobrenome, em javascript eu não consigo definir que isso seja obrigatório, porém no typescript eu consigo
interface Pessoa {
    nome: string;
    sobrenome: string;
}
const funcaoPessoa = (pessoa: Pessoa) => {
    console.log(pessoa.nome, pessoa.sobrenome)
}
// Dessa forma, se eu tentar passar um objeto que não tenha os atributos nome e sobrenome, o typescript irá me avisar que está errado
//@ts-ignore -> Ignora o erro na próxima linha
funcaoPessoa({nome: 'João', sobrenome: 'Vitor', idade: 27}) // Erro
funcaoPessoa({nome: 'João', sobrenome: 'Vitor'}) // Certo
// Utilizando o ts a própria ide já me avisa que está errado evitando surpresas no futuro
