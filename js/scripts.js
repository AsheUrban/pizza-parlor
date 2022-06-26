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
}

// Pizza.prototype.addCost = function() {
//   if (this.size === "small")
//     return ...
// }

// UI Logic

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    // let toppings = $("input:checkbox[id=pepperoni,olives]:checked").val();


    if(size === "small") {
      $("#show-order").text("$10");
    } else if(size === "small" && toppings === "olives") {
        $("#show-order").text("$11");
    } else if(size === "small" && toppings === "olives" && toppings === "pepperoni") {
          $("#show-order").text("$12");
    } else if (size === "medium") {
    $("#show-order").text("$12");
    } else if (size === "medium" && toppings === "olives") {
      $("#show-order").text("$13");
    } else if (size === "medium" && toppings === "olives" && toppings === "pepperoni") {
      $("#show-order").text("$14");
    } else if (size === "large") {
    $("#show-order").text("$14");
    } else if (size === "large" && toppings === "olives") {
      $("#show-order").text("$15");
    } else if (size === "large" && toppings === "olives" && toppings === "pepperoni") {
      $("#show-order").text("$16");
    }

    
    
  });
});