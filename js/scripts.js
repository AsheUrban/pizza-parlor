// Business Logic for Pizza

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.totalCost= 0;
}

Pizza.prototype.addCost = function() {
  if(this.size === "Small") {
    this.totalCost = 10;
  } else if (this.size === "Medium") {
    this.totalCost = 12;
  } else {
    this.totalCost = 14;
  }
  

  if(this.toppings === "olives") {
    this.totalCost += 1;
  }

  if(this.toppings === "pepperoni") {
    this.totalCost += 1;
  }
  console.log();
  return this.totalCost
 
}

// UI Logic

let newPizza = new Pizza ();


$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();


      $("#show-order").html(newPizza.addCost(this.totalCost));
      console.log();
     
      
    });

    function logReset() {
    }
    
    });

