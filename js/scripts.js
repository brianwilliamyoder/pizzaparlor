//Business Logic

newOrder = new Order();


function Order() {
  this.pizzas = [];
  this.totalCost = 0
}

Order.prototype.addPizza = function(pizza) {
this.pizzas.push(pizza);
}

function Pizza() {
  this.toppings= [];
  this.size = "";
  this.price = 0;
}

Pizza.prototype.addToppings = function(type) {
  this.toppings.push(type)
}

//UI Logic

function addPizzaToOrder(event) {
  event.preventDefault();

}

function provideTotal() {

}


window.addEventListener("load", function (){
  document.querySelector("form#orderpizza").addEventListener("submit", addPizzaToOrder);
  document.querySelector(form#orderpizza).addEventListner("click", provideTotal);
  
})


 

