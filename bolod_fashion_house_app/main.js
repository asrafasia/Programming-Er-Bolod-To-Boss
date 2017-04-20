/*
	Author      : Md. Jamal Uddin inspired by Jhankar Mahbub
	App type    : A simple store managment application
	Language    : JavaScript
	Time period : 01 to 20 April, 2017
*/

class Store {
	constructor(name) {
		this.name = name;
		this.items = [];
		this.stock = {};
		this.prices = {};
		this.totalSales = 0;
	}
	
	// this function used to search any item in our 'Fashion House'.
	isItemAvailable(name) {
		var name = document.getElementById('search').value;
		var itemIndex = this.items.indexOf(name);
		if(itemIndex == -1) {
			document.getElementById('searchItem').innerHTML = false;
		}
		else {
			document.getElementById('searchItem').innerHTML = true;
		}
	}
	
	// this function used to search any item price in our 'Fashion House'.
	getPrice(name) {
		var name = document.getElementById('price').value;
		var isAvailable = this.isItemAvailable(name);
		if(isAvailable == true) {
			var price = this.prices[name];
			return price;
		}
		else {
			document.getElementById('searchPrice').innerHTML = "Sorry, We do not have " + name;
		}
	}
	
	// this function used to show today total sales amount of our 'Fashion House'.
	getTotalSell() {
		document.getElementById('totalSell').innerHTML = this.totalSales;
	}
	
	// this function used to sell any item of our 'Fashion House'.
	sellItem(name, quantity) {
		var name = document.getElementById('userInput01').value;
		var quantity = document.getElementById('userInput02').value;
		var available = this.stock[name];
		if(available < quantity) {
			document.getElementById('sellItem').innerHTML = "Sorry, We do not have enough.";
			return;
		}
		else {
			var itemPrice = this.getPrice(name);
			var currentSale = itemPrice * quantity;
				document.getElementById('sellItem').innerHTML = "Your bill is " + currentSale + " TK only.";
			this.totalSales = this.totalSales + currentSale;
			var remainig = available - quantity;
			this.stock[name] = remainig;
				document.getElementById('sellItem').innerHTML = "Thankyou for purchase our " + name;
		}
	}
	
	// this function used to add any item in our 'Fashion House'.
	addItem(name, price, quantity) {
		
		var isExsiting = this.isItemAvailable(name);
		if(isExsiting == true) {
			var available = this.stock[name];
			this.stock[name] = available + quantity;
		}
		else {
			var name = document.getElementById('userInput1').value;
			var price = document.getElementById('userInput2').value;
			var quantity = document.getElementById('userInput3').value;
			this.items.push(name);
			this.prices[name] = price;
			this.stock[name] = quantity;
				document.getElementById('addItem').innerHTML = quantity + " pices " + name + " added successfully";
		}
	}
	
	// this function used to payment our Fashion House rent bill.
	payRent(rentAmount){
		var rentAmount;
		if(rentAmount <= this.totalSales){
			document.getElementById('rent').innerHTML = "Today our shop rent payment successfully done.";
		}
		else{
			document.getElementById('rent').innerHTML = "Sorry, today we do not achive our sales target, tomorrow we will pay you.";
		}
	}
	
	/*
	shortcut JavaScript sorting method
	
	showAllItems() {
		return this.items.sort();
	}
	*/
	
	// Show all item list of our shop using selection sort algorithm.
	showAllItems(){
		var minIdx;
			var temp;
			var len = this.items.length;
		for(var i = 0; i < len; i++){
			minIdx = i;
			for(var j = i + 1; j < len; j++){
				if(this.items[j] < this.items[minIdx]){
					minIdx = j;
				}
			}
			temp = this.items[i];
			this.items[i] = this.items[minIdx];
			this.items[minIdx] = temp;
		}
		if(this.items == 0){
			document.getElementById('show').innerHTML = "We do not have any item yet.";	
		}
		else{
			document.getElementById('show').innerHTML = this.items;
		}
	}
}

var bolodFashion = new Store("Bolod Fashion House");