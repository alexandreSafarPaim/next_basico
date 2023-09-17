//// DECLARAÇÃO DE VARIÁVEIS
var variavel1 = '1' //variável de escopo global
const variavel2 = '2'// constante de escopo local
let variavel3 = '3' //variável de escopo local


//// DECLARAÇÃO DE FUNÇÕES
function nome(){} // função nomeada
const nome2 = () => {} // arrow function
() => {} // arrow function anônima

// parametros de funções
const exemploFn = (param) => {
    console.log(param)  
}

const exemploFn2 = ({nome, idade}) => {
    console.log(nome, idade)  
}
exemploFn2({nome: 'João', idade: 20})

//// Manipulação de Arrays e Objetos

/// Desestruturação
const arr = [1,2,3,4,5,6];

const [primeiro,segundo,terceito] = arr;
console.log('primeiro',primeiro)
console.log('segundo',segundo)
console.log('terceito',terceito)

const obj = {
    nome: 'João',
    idade: 20,
}
const {idade} = obj;

/// Operador Spread
const newArr = [0,...arr]

/// Operador Rest
function soma(...params){
    console.log(params)
}
soma(1,2,3,4,5,6,7,8,9,10)

/// Map

const arrMap = [1,2,3,4,5,6];

const arrMap2 = arr2.map((item, index, arr) => {
    return {numyer: item}
})

const arrMap3 = arr2.map((item, index, arr) => ({item: item}))


//o foreach não retorna um novo array
arr4.forEach((item, index, arr) => {
    console.log(item)
});

//FILTER

const arrUnfiltered = [1,2,3,4,5,6,7,8,9,10];

const arrFiltered = arrUnfiltered.filter((item, index, arr) => index > 3 && item % 2 === 0);
console.log(arrFiltered)

//FIND

const arrFind = [
    {
        nome: 'João',
        idade: 20,
    },
    {
        nome: 'Maria',
        idade: 30,
    },
];

const arrFinded = arrFind.find((item, index, arr) => item.idade === 30);
console.log(arrFinded)

//REDUCE

const arrReduce = [1,2,3,4,5,6,7,8,9,10];

const arrReduced = arrReduce.reduce((acumuldor, item, index, arr) => {
    if(item % 2 === 0){
        return [...acumuldor, item]
    }
    return acumuldor
}, []);

console.log(arrReduced2)

// Split e Join

const str = 'João, Maria, Pedro, José';

const arrSplit = str.split(', ');
console.log(arrSplit)

const arrJoin = arrSplit.join(', ');
console.log(arrJoin)

// Slice e Splice

const arrSlice = [1,2,3,4,5,6,7,8,9,10];

const arrSliced = arrSlice.slice(2, 5);
console.log(arrSliced)

const arrSpliced = arrSlice.splice(2, 5);
console.log(arrSpliced)

// Operadores Ternários

const numero = 20;

const resultado = numero > 10 ? 'maior que 10' : 'menor que 10';


// Operadores Lógicos

const numero2 = 20;

const resultado2 = numero2 > 10 && numero2 < 30;


//// PROMISES

// Promise é uma função que retorna um objeto fora do tempo de execução da função
// No exemplo abaixo, a função minhaPromise retorna um objeto que só será executado após 2 segundos
const minhaPromise = () => new Promise((resolve, reject) => { 
    setTimeout(() => {resolve('ok')}, 2000)
})


// O primeiro método para executar uma promise é utilizando o método then
// O metodo then recebe como parametro uma função que será executada após a promise ser resolvida
// O metodo catch recebe como parametro uma função que será executada caso a promise seja rejeitada
let response = minhaPromiseI().then(response => {
    console.log(response)
    return 'resultado: ' + response;
}).catch(err => {
    console.log(err)
})

// É possivel aninhar vários thens para manipular o resultado da promise

let response2 = minhaPromiseI().then(response => {
    console.log(response)
    return 'resultado: ' + response;
}).then(response => {
    console.log(response)
    return 'resultado: ' + response;
}).catch(err => {
    console.log(err)
})

// O segundo método para executar uma promise é utilizando o método async/await
// O await só pode ser utilizado dentro de uma função async
// Para tratamento de erros, é necessário utilizar o try/catch

const minhaPromiseII = async () => {
    try{
        const response = await minhaPromiseI();
        console.log(response)
    }catch(err){
        console.log(err)
    }
}
