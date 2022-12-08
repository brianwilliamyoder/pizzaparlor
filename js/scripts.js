function Order() {
  this.pizzas = [];
  this.totalCost = 0
}

function Pizza() {
  this.toppings= [];
  this.price = 0
}

Pizza.prototype.addToppings = function(i) {
  this.toppings.push(toppings[i])
}

const toppings = {
  "artichoke": 1.00, 
  "bacon": 1.00,
  "diced olives": .50,
  "garlic": .25,
  "pepperoni": .75,
}

 

}