var diners=[
 {name:'adam', entree1:'ramen', price1:11.5, entree2: 'miso', price2 : 3},

 {name:'bobby', entree1: 'udon', price1 :10.69, entree2: 'gyoza', price2 :4.5},

{name:'carly', entree1: 'teriyaki chicken', price1:12, entree2: 'miso', price2 : 3},
];

var total = diners.reduce(function(cumulative, obj) {
   return cumulative + obj.price1 + obj.price2;
}, 0);

console.log(total);
