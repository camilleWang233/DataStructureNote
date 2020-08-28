var list = document.querySelector(".output ul");
var box = document.querySelector(".output p");
var total = 0;
list.innerHTML = " ";
box.textContent = "";

var product = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];
console.log(product);
for (var i = 0; i < product.length; i++) {
  var myArray = product[i].split(":");
  console.log('123',myArray);
  var name = myArray[0];
  console.log('233',myArray[1]);
  var price = Number(myArray[1]);
 
  console.log(price);
  total += price;
  itemText = name + "———— $ " + price;
  var listItem = document.createElement("li");
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

box.textContent = 'Total:'+total.toFixed(2);
