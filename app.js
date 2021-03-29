let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(valorEur){
    var dollar = valorEur * oneEuroIs.USD;
   return valorEur * oneEuroIs.USD;
}
console.log(fromEuroToDollar(3.5));

function fromDollarToYen(dollar){
    var yen = dollar * oneEuroIs.JPY;
   return dollar * oneEuroIs.JPY;
}
console.log(fromDollarToYen(2));


function fromYanToPound(yen){
    
   return yen * oneEuroIs.GBP;
}
console.log(fromYanToPound(2));

module.exports = {  fromEuroToDollar, fromDollarToYen, fromYanToPound };
