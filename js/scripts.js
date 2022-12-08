function Order() {
  this.pizzas = [];
  this.totalCost = 0
}

Order.prototype.addPizza = function(pizza) {
this.pizzas.push(pizza);
}


function Pizza() {
  this.toppings= [];
  this.price = 0
}

Pizza.prototype.addToppings = function(type) {
  this.toppings.push(type)
}

Pizza.prototype.addPrice = function (topping) {  
toppingsMenu.topping += this.price
}

const toppingsMenu = {
  "artichoke": 1.00, 
  "bacon": 1.00,
  "diced olives": .50,
  "garlic": .25,
  "pepperoni": .75,
}

 

