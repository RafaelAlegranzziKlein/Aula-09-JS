let real = 100.00;
let doleta = real/5.20;
let euro = real/5.70;

console.log('O valor em real é de '+real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log('O valor em dolar é de '+doleta.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' }));
console.log('O valor em euro é de '+euro.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' }));
