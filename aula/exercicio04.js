let produto = 89.90;
let produtoComDesconto = produto/1.10;
let nomeProduto = "Fones de ouvido";

console.log('O produto '+nomeProduto+' tem um valor em real de '+(produto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })));
console.log('O produto '+nomeProduto+' tem um desconto de 10% o valor fica em : '+produtoComDesconto.toFixed(produtoComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })));