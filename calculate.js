/*Javascript for Mario Pizza Application
*Author:
*Mariusz Szydlowski
*R00105234
*/

//var pizza = 0;
var totalPriceForOrder = 0;
var totalPriceForPizza = 0;
//var pizzaSize;
//var pizzaPriceForSize;
//var pizzaSos;
// this is constructor for pizza
function pizza(si, s, t, p, pt) {
	this.size = si;
	this.sos = s;
	this.toppings = t;
	this.price = p;
	this.ptop = pt;
}
//  when document is ready(html page it's loaded) run function hideAllButtonOption();
$(document).ready(function () {
	hideAllButtonOption();
});
// hide all elements 
function hideAllButtonOption() {
	$('#pizzaOption').hide();
	$('#sideOption').hide();
	$('#drinkOption').hide();
	$('#dessertOption').hide();
};
//make visible element after pressing the button, hide the rest of the options
//Create new pizza Object and set valu to property


function getVisiblePizzaElement(e) {
	var target = e.target;
	var newPizza = new pizza();
	var toppings = [];
	hideAllButtonOption();
	$('#pizzaOption').show();
	function setSmall() {
		newPizza.size = "Small";
		newPizza.pt = 1;
		newPizza.price = 9.99;
		getPizzaPrice();
		setPizzaImage();
		$('#sizePizza').html("Small 9\"");
		//	setPizzaSos();
	}
	function setMedium() {
		newPizza.size = "Medium";
		newPizza.pt = 1.5;
		newPizza.price = 12.99;
		getPizzaPrice();
		setPizzaImage();
		$('#sizePizza').html("Medium 12\"");
		//	setPizzaSos();
	}
	function setLarge() {
		newPizza.size = "Large";
		newPizza.pt = 2;
		newPizza.price = 15.99;
		getPizzaPrice();
		setPizzaImage();
		$('#sizePizza').html("Large 15\"");
		//	setPizzaSos();	
	}
	function setTomato() {
		newPizza.sos = 'Tomato';
		$('#sosPizza').html("Tomato");
		getPizzaPrice();
	}
	function setBBQ() {
		newPizza.sos = 'BBQ';
		$('#sosPizza').html("BBQ");
		getPizzaPrice();
	}
	function setTomatoGarlic() {
		newPizza.sos = 'Tomato-Garlic';
		$('#sosPizza').html("Tomato-Garlic");
		getPizzaPrice();
	}
	function setPepperoni() {
		console.log("setPepperoni() success");
		toppings.push("Pepperoni ");
	/*	var text = "<ul>;		
		for(var i=0; i<toppings.length; i++){
			 text += "<li>" + toppings[i] + "</li>";
		}		
	*/	$('#toppingsPizza').html(toppings);
	}
	function setHam() {
		console.log("setHam() success");
		toppings.push("Ham ");
		$('#toppingsPizza').html(toppings);
	}
	function setOnion() {
		console.log("setOnion() success");
		toppings.push("Onion ");
		$('#toppingsPizza').html(toppings);
	}
	function removePepperoni() {
		console.log("removePepperoni() success");
		toppings.shift("Pepperoni ");
		$('#toppingsPizza').html(toppings);
	}
	function removeHam() {
		console.log("removeHam() success");
		toppings.shift("Ham ");
		$('#toppingsPizza').html(toppings);
	}
	function removeOnion() {
		console.log("removeOnion() success");
		toppings.shift("Onion ");
		$('#toppingsPizza').html(toppings);
	}
	function getPizzaPrice() {
		console.log("totalPriceForPizza = " + pizza.price);
		var t = 0;
		//	t = pizza.toppings.split(" ");


		totalPriceForPizza = newPizza.price + (newPizza.pt * t);
		document.getElementById("total_price_for_pizza").innerHTML = '&euro;' + totalPriceForPizza;

		return totalPriceForPizza;
	}
	function setPizzaImage() {
		$('#image').html("<img src=\"images/pizza-7.jpg\"alt=\"pizza\"title=\"pizza\">");
	}
	function getPizzaOrder() {
		if (newPizza.size == null) {
			console.log("pizzaSize is null");
		} else {
			console.log("pizzaSize is fine");
			document.getElementById("elPizza").innerHTML = newPizza.size;
			document.getElementById("elPizzaPrice").innerHTML = '&euro;' + totalPriceForPizza;
		}
	}
	function cancelPizza() {
		//newPizza = null;
	}
	var s = document.getElementById("small").addEventListener('focus', setSmall, false);
	var m = document.getElementById("medium").addEventListener('focus', setMedium, false);
	var l = document.getElementById("large").addEventListener('focus', setLarge, false);
	var st = document.getElementById("tomato").addEventListener('focus', setTomato, false);
	var sb = document.getElementById("bbq").addEventListener('focus', setBBQ, false);
	var stg = document.getElementById("tomatoGarlic").addEventListener('focus', setTomatoGarlic, false);
	var p = document.getElementById("pepperoni").addEventListener('focus', setPepperoni, false);
	var h = document.getElementById("ham").addEventListener('focus', setHam, false);
	var o = document.getElementById("onion").addEventListener('focus', setOnion, false);
	//	p.addEventListener('blur', removePepperoni,false);
	//	h.addEventListener('blur', removeHam,false);
	//	o.addEventListener('blur', removeOnion,false);	
	//	var toppings = document.getElementById("topping_price_for_size").addEventListener('focus',setToppings, false);

	document.getElementById("pizzaSubmitButton").addEventListener('click', getPizzaOrder, false);
	document.getElementById("pizzaResetButton").addEventListener('click', cancelPizza, false);
};
function getVisibleSideElement(e) {
	var target = e.target;
	hideAllButtonOption();
	$('#sideOption').show();
};
function getVisibleDrinkElement(e) {
	var target = e.target;
	hideAllButtonOption();
	$('#drinkOption').show();
};
function getVisibleDessertElement(e) {
	var target = e.target;
	hideAllButtonOption();
	$('#dessertOption').show();
};
// get variable from html by correct id and set eventListener and run correct function if button is click
document.getElementById("pizza").addEventListener('click', getVisiblePizzaElement, false);
document.getElementById("sides").addEventListener('click', getVisibleSideElement, false);
document.getElementById("drink").addEventListener('click', getVisibleDrinkElement, false);
document.getElementById("dessert").addEventListener('click', getVisibleDessertElement, false);


function createPizza() {
	//var pizzaSize = null;
	pizzaSos = null;
	var pizzaToppings = [];

}
function setSizeOfPizza(e) {
	var target = e.target;
	console.log('target = ' + target);

}

function setMedium() {
	console.log("setMedium");
}
function setLarge() {
	console.log("setLarge");
}
function resetSize() {
	console.log("resetSize");

}


function calculateTotalPrice() {
	totalPriceForOrder = totalPriceForPizza;
	document.getElementById('totalPrice').innerHTML = '&euro;' + totalPriceForOrder;
}
function setDataToTable() {
	document.getElementById('elPizza').innerHTML = pizzaSize;
	document.getElementById('elPizzaPrice').innerHTML = '&euro;' + pizzaPriceForSize;
}
function orderNow() {
	var validation = false;
	var customerName = document.getElementById("customerName");
	var customerTel = document.getElementById("customerTel");
	var customerAddress = document.getElementById("customerAddress");
	if ((totalPriceForOrder == 0) || (customerName == null) || (customerTel == null)) {
		alert("First verity the price!!! ");
	} else {
		validation = true;
		document.getElementById("myForm").submit();
		alert("Order Accepted");
	}
}
document.getElementById("calculateOrderButton").addEventListener('click', calculateTotalPrice, false);
document.getElementById("orderNowButton").addEventListener('click', orderNow, false);
