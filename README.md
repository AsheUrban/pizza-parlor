# _Independent Project #4: Pizza Parlor_

#### Contributors: _Ashe Urban_

#### _A web site to demonstrate new skills in objects and prototypes!_


## Technologies Used

* JavaScript
* JQuery
* HTML
* CSS
* Markdown


## Description
Pizza Parlor
Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.

_Link to lesson:_ https://epicenter.epicodus.com/courses/967/code_reviews/5850

## Tests
# _Describe: Pizza()_

Test: "It should create Pizza"
Code: function Pizza(size, toppings) {
Expected Output: newPizza1 {size: undefined, toppings: undefined}

Test: "It should return a Pizza object with two properties for toppings and size"
Code: let newPizza1 = new Pizza(["pepperoni", "olives"], "medium");
Expected Output: newPizza1 {size: "Medium", toppings: ["pepperoni", "olives"]}

# _Describe: Customer()_

Test: "It should create Customer."
Code: function Customer (firstName, pizza) {
Expexted output: newCustomer(firstName: "name", pizza{});

Test: "It should assign a pizzaId."
Code: Customer.prototype.addPizza
Expected output: newPizza.id;

Test: "It should find a pizza."
Code: Order.prototype.findPizza
Expected output: this.pizzas[id] or false

# _Describe: Order()_

Test: "It should create Order."
Code: function Order (customers, currentId) {
Expected output: newOrder(customer{}, currentId: 0);

Test: "It should assign a customerId."
Code: Order.prototype.addCustomer
Expected output: newCustomer.id;

Test: "It should find a customer."
Code: Order.prototype.findCustomer
Expected output: this.customers[id] or false

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

## Known Bugs

*


## License

_MIT_

Copyright (c) _2022_ _Ashe Urban_
