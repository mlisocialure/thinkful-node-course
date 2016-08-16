var diners=[
{name:'adam', entree1:'ramen', price1:11.5, entree2: 'miso', price2 : 3},

//{name:'bobby', entree1: 'udon', price1 :10.69, entree2: 'gyoza', price2 : 4.5},

//{name:'carly', entree1: 'teriyaki chicken', price1:12, entree2: 'miso', price2 : 3},
];

var entrees1_total=0;
for (var d in diners){
    
    if(!diners.hasOwnProperty(d)) 
    {continue;}
    
     entrees1_total +=  diners[d].price1; //total expense of entree1 for all diners  

     diners[d].tax1 = diners[d].price1*0.082; // method for sales tax

     entrees1_total += diners[d].tax1; //total entree1 price including sales tax
     }

var entrees2_total=0;
for (var d in diners){
    
    if(!diners.hasOwnProperty(d)) continue;

    entrees2_total += diners[d].price2;

    diners[d].tax2 = diners[d].price2 * 0.082;

    entrees2_total += diners[d].tax2;
    }

var total = entrees1_total + entrees2_total;

var total_bill = total*1.2;   //tips
var tips = total*.2;

console.log("total is: " + total_bill.toString());
console.log("total tips for the waitress is: " + tips.toString());

for (var d in diners) {
    console.log(diners[d].name + " spends " + (diners[d].price1 + diners[d].tax1)+(diners[d].price2 + diners[d].tax2));
        }   // print out total spent for each patron
