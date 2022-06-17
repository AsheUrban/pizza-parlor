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

function Customer (name, pizza) {
  this.name
  this.pizza
}

// Business Logic for Pizza

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

let newPizza1 = new Pizza();

Pizza.prototype.AddToppings = function() {

}

// UI Logic

let order = new Order();