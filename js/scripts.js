// Business Logic for Order

function Order (customers, currentId) {
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

Order.prototype.findCustomer = function(id) {
  if (this.customers[id] != undefined) {
    return this.customers[id];
  }
  return false;
}

// Business Logic for Customer

function Customer (firstName, pizzaId) {
  this.firstName = firstName;
  this.pizzaId = 0;
}

Customer.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Customer.prototype.assignId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
};

Customer.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
}

// Business Logic for Pizza

function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

// Pizza.prototype.addTopping = function () {

// }

// UI Logic

let newOrder = new Order ();

