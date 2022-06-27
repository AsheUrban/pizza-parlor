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
  

  if(this.toppings === "topping1") {
    this.totalCost += 1;
  }

  if(this.toppings === "topping2") {
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
    $("input:checkbox[name=toppings]:checked").each(function(element) {
      selectedToppings.push($(element).val());
    }); // how does this connect to the toppings in our business logic?

    // get .addCost
   
    $("#show-order").html(newPizza.addCost(size, selectedToppings));
    console.log(newPizza);
    });

    function logReset() {
    }
    
    });

