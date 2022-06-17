// Business Logic for Order

function Order () {
  this.customers = {};
  this.currentId = 0;
}

Order.prototype.addCustomer = function(customer) {
  customer.id = this.assignId();
  this.customers[customer.id] = customer;
};

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

// Business Logic for Customer

function Customer (firstName, pizza) {
  this.firstName = firstName;
  this.pizza = {};
}

Customer.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Customer.prototype.assignId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
};

// Business Logic for Pizza

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.AddToppings = function() {

}

// UI Logic

let newOrder1 = new Order ();
let newCustomer1 = new Customer()
let newPizza1 = new Pizza();