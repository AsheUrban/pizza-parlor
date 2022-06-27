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
  this.totalCost= 0;
  console.log(Pizza);
}


Pizza.prototype.addCost = function() {
  if(this.size = "Small") {
    this.totalCost = 10;
  } else if (this.size = "Medium") {
    this.totalCost = 12;
  } else {
    this.totalCost = 14;
    
  }

  if(this.toppings = "topping1") {
    this.totalCost += 1;
  }
  if(this.toppings = "topping2") {
    this.totalCost += 1;
  }

  return this.totalCost
 
}

// UI Logic

let newPizza = new Pizza ();

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();

    // gather input values from fields
    const size = $("input:radio[name=size]:checked").val();
   
    let selectedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      selectedToppings.push($(this).val());
    }); 

    // get .addCost
   
    $("#show-order").html(newPizza.addCost());
    console.log(newPizza);
    });

    function logReset() {
    }
    
    });

