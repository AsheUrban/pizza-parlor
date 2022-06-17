// Business Logic for Order

function Order (customers, currentIdCustomer) {
  this.customers = {};
  this.currentIdCustomer = 0;
}

Order.prototype.addCustomer = function(customer) {
  customer.id = this.assignIdCustomer();
  this.customers[customer.id] = customer;
};

Order.prototype.assignIdCustomer = function() {
  this.currentIdCustomer += 1;
  return this.currentIdCustomer;
};

Order.prototype.findCustomer = function(id) {
  if (this.customers[id] != undefined) {
    return this.customers[id];
  }
  return false;
}
// Business Logic for Customer

function Customer (firstName, currentIdPizza) {
  this.firstName = firstName;
  this.currentIdPizza = 0;
}

Customer.prototype.addPizza = function(pizza) {
  pizza.id = this.assignIdPizza();
  this.pizzas[pizza.id] = pizza;
};

Customer.prototype.assignIdPizza = function() {
  this.currentIdPizza += 1;
  return this.currentIdPizza;
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

Pizza.prototype.addTopping = function () {
  if();
}

Pizza.prototype.chooseSize = function () {
  if();
}
Pizza.prototype.addToCost = function () {
  if();
}

// UI Logic

let newOrder1 = new Order ();
let newCustomer1 = new Customer("george"); 
let newPizza1 = new Pizza ("medium", ["pepperoni", "olives"]);
newOrder1.addCustomer(newCustomer1);
newCustomer1.addPizza(newPizza1);