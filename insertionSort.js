const livros = require('./livros');

function insertionSort(lista){
    
    for(let atual = 0; atual < lista.length; atual++){
        while(atual > 0 && lista[atual].preco < lista[atual-1].preco){
            let itemAtual = lista[atual];
            let itemAnterior = lista[atual-1];
        
            lista[atual] = itemAnterior;
            lista[atual-1] = itemAtual;

            atual--;
        }
    }
    
    console.log(lista);
}

insertionSort(livros);