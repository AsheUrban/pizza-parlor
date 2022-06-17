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

function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

// Pizza.prototype.addCost = function () {
//   return "$" + this.X + this.X
// }

// UI Logic

let newOrder = new Order();

function showOrder(customerId) {
  const newOrder = newOrder.findCustomer(customerId);
  $("#show-contact").show();
  $(".first-name").html(customer.firstName);
  $(".cost").html(pizza.cost)
}

$(document).ready(function() {
  attachContactListeners();
  $("form#new-corder").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();

    $("input#new-first-name").val("");
   
    let newCustomer = new Customer(inputtedFirstName, currentIdPizza)
    newOrder.addCustomer(newCustomer);
    newCustomer.addPizza(newPizza);
  });
});



// Pizza.prototype.addTopping = function () {
//   if();
// }

// Pizza.prototype.chooseSize = function () {
//   if();
// }



