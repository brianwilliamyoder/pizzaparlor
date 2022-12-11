Describe: Pizza() _pass_
Test: create a new pizza objects that stores toppings as an array, and size as a string
Code: let newPizza = new Pizza(["artichoke"], "large")
Expected Output: Pizza {toppings: ["artichoke"], "large }


Describe: Order() _pass_
Test: create a new order constructor that holds pizzas and total price a key value pairs. 
Code: let newOrder = new Order (newPizza, 10)
Expected Output = newOrder (pizzas: Array[1], totalPrice: 10)

Describe: Order.prototype.addPizza() _pass_
Test: create an addPizza method that pushes a new pizza to an order.
Code: newOrder.addPizza(newPizza)
Expected Output: newOrder {pizzas: Array(1), totalPrice: 0}