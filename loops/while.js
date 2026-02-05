const tableOf = 5;
let noOfRows = 1;
let presentRow;
console.log("The table of" , tableOf , ":");

while (noOfRows <= 10) {
    presentRow = tableOf * noOfRows;
    console.log(tableOf , "x" , noOfRows , "=" , presentRow);
    noOfRows = noOfRows + 1;
}