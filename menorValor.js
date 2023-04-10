const livros = require('./livros');

function menorValor(arreyProdutos, posicaoInicial){
  let maisBarato = posicaoInicial;

  for(let atual = posicaoInicial; atual < arreyProdutos.length; atual++){
      if (arreyProdutos[atual].preco < arreyProdutos[maisBarato].preco){
          maisBarato = atual;
      }
  }
  return maisBarato;
}

module.exports = menorValor;
