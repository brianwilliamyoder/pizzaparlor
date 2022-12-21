//Business Logic

let newOrder = new Order();

function Order() {
  this.pizzas = [];
  this.totalCost = 0;
  this.counter = 0;
}

Order.prototype.addPizza = function(pizza) {
this.pizzas.push(pizza);
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

function determinePrice() {
  let i = newOrder.counter; 
  if (newOrder.pizzas[i].size === "small") {
    newOrder.pizzas[i].price += 10;
  } 
   else if (newOrder.pizzas[i].size === "medium") {
    newOrder.pizzas[i].price += 12;
   }
   else if (newOrder.pizzas[i].size === "large") {
    newOrder.pizzas[i].price += 15;
   }

   newOrder.pizzas[i].price += newOrder.pizzas[i].toppings.length;
  }

//UI Logic

function getToppingsArray() {
  const checkboxes = document.querySelectorAll('.topping:checked');
  const toppingsArray = [];
  checkboxes.forEach(function(checkbox) {
    toppingsArray.push(checkbox.value);
  });
  return toppingsArray;
}

function addPizzaToOrder(event) {
  event.preventDefault();
  let orderDiv = document.getElementById("yourpizzas");
  let p = document.createElement("p");
  let psize = document.getElementById("pizza-size").value;
  let toppingsArray = getToppingsArray();
  let pizza = new Pizza(toppingsArray, psize);
  newOrder.addPizza(pizza); 
  determinePrice();
  let i = newOrder.counter;
  let toppings = newOrder.pizzas[i].toppings;
  let divsize = newOrder.pizzas[i].size;
  p.innerText = divsize + " " + toppings.join(",  ") + " $" + newOrder.pizzas[i].price;
  orderDiv.append(p);
  provideTotal();
  newOrder.counter +=1;
  
}



function provideTotal() {
  let p = document.getElementById("ordertotal");
  let i = newOrder.counter;
  newOrder.totalCost += newOrder.pizzas[i].price;
  p.innerText = "Your total cost is $" + newOrder.totalCost;
}

function finalizeOrder() {
  let orderDiv = document.getElementById("orderdiv");
  let h2 = document.querySelector("h2")
  let p = document.createElement("p");
  p.innerText = "Please pick up in 45 minutes"
  let orderTotal = document.getElementById("orderdiv");
  orderTotal.append(p);
  h2.style.display = "none"
  orderDiv.style.display = "none";
}

window.addEventListener("load", function (){
  document.querySelector("form#orderpizza").addEventListener("submit", addPizzaToOrder);
  document.querySelector("div#finish-order").addEventListener("click", finalizeOrder);
});