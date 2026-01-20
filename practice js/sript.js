var table = Number(prompt("Enter the number to print its multiplication table:"));
var start= Number(prompt("Enter starting point:"));
var end= Number(prompt("Enter ending point:"));

for (var i = start; i <= end; i++) {
    var result = table * i;
   document.write(
  "<h4 style='text-align:center;'>" +
  table + " x " + i + " = " + result +
  "</h4><br>"
);



   console.log(table + " x " + i + " = " + result);
}