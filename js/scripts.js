//Business Logic

let newOrder = new Order();
// this will need to be called on load

function Order() {
  this.pizzas = [];
  this.totalCost = 0
}

Order.prototype.addPizza = function(pizza) {
this.pizzas.push(pizza);
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}



//UI Logic


//we will have to create a separate addPizzaToOrder function to call within this one, 
//this function will only create a pizza based on the user input
//once the pizza is made, the add pizza to order function is called
function addPizzaToOrder(event) {
  event.preventDefault();
  let top1 = document.getElementById("topping-1").value;
  let top2 = document.getElementById("topping-2").value;
  let top3 = document.getElementById("topping-3").value;
  let top4 = document.getElementById("topping-4").value;
  let top5 = document.getElementById("topping-5").value;
  let size = document.getElementById("pizza-size").value;
  let toppingsArray = [top1, top2, top3, top4, top5];
  let pizza = new Pizza(toppingsArray, size); 
  newOrder.addPizza(pizza);
}

function provideTotal() {

}



window.addEventListener("load", function (){
  document.querySelector("form#orderpizza").addEventListener("submit", addPizzaToOrder);
  document.querySelector("form#orderpizza").addEventListener("click", provideTotal);
  
})


 

