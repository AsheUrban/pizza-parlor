// Business Logic for Order

function Order (customers) {
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

function Customer (firstName) {
  this.firstName = firstName;
  this.pizzas = {};
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

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

let newPizza = new Pizza();

Pizza.prototype.addCost = function() {
  if(this.size === "small") {
    return "$10"
  } else if(this.size === "Small" && this.toppings === "olives") {
    return this.cost = "$11" 
  } else if(this.size === "Small" && this.toppings === "olives" && this.toppings === "pepperoni") {
    return this.cost = "$12"
  } else if (this.size === "Medium") {
    return this.cost = "$12"
  } else if (this.size === "Medium" && this.toppings === "olives") {
    return this.cost = "$13"
  } else if (this.size === "Medium" && this.toppings === "olives" && this.toppings === "pepperoni") {
    return this.cost = "$14"
  } else if (this.size === "Large") {
    return this.cost = "$14"
  } else if (this.size === "Large" && this.toppings === "olives") {
    return this.cost = "$15"
  } else if (this.size === "Large" && this.toppings === "olives" && this.toppings === "pepperoni") {
    return this.cost = "$16"
}
}
// UI Logic

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    newPizza.addCost();
    const size = $("#size").val();

    

    
   
    });
  });
