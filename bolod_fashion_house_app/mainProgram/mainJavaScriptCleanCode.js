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
		var itemIndex = this.items.indexOf(name);
		if(itemIndex == -1) {
			return false;
		}
		else {
			return true;
		}
	}
	
	// this function used to search any item price in our 'Fashion House'.
	getPrice(name) {
		var isAvailable = this.isItemAvailable(name);
		if(isAvailable == true) {
			var price = this.prices[name];
			return price;
		}
		else {
			console.log("Sorry, We do not have " + name);
		}
	}
	
	// this function used to show today total sales amount of our 'Fashion House'.
	getTotalSell() {
		console.log("today our total sell amount = " + this.totalSales);
	}
	
	// this function used to sell any item of our 'Fashion House'.
	sellItem(name, quantity) {
		var available = this.stock[name];
		if(available < quantity) {
			console.log("Sorry, We do not have enough.");
			return;
		}
		else {
			var itemPrice = this.getPrice(name);
			var currentSale = itemPrice * quantity;
				console.log("Your bill is " + currentSale + " TK only.");
			this.totalSales = this.totalSales + currentSale;
			var remainig = available - quantity;
			this.stock[name] = remainig;
				console.log("Thankyou for purchase our " + name);
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
			this.items.push(name);
			this.prices[name] = price;
			this.stock[name] = quantity;
				console.log(quantity + " pices " + name + " added successfully");
		}
	}
	
	// this function used to payment our Fashion House rent bill.
	payRent(rentAmount){
		var rentAmount;
		if(rentAmount <= this.totalSales){
			console.log("Today our shop rent payment successfully done.");
		}
		else{
			console.log("Sorry, today we do not achive our sales target, tomorrow we will pay you.");
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
		return this.items;
	}
}

var bolodFashion = new Store("Bolod Fashion House");
bolodFashion.addItem("pant", 580, 10);
	//output : "10 pices pant added successfully"
	
bolodFashion.sellItem("pant", 2);
	/* output : "Your bill is 1160 TK only."
	            "Thankyou for purchase our pant"
	*/
	
bolodFashion.getTotalSell();
	//output : "today our total sell amount = 1160"

bolodFashion.isItemAvailable("pant");
	//output : true
	
bolodFashion.isItemAvailable("lungi");
	//output : false
	
bolodFashion.getPrice("pant");
	//output : "Your desire pant price only 580 TK"

bolodFashion.getPrice("bread");
	//output : "Sorry, We do not have bread"
	
bolodFashion.addItem("t-shirt", 220, 4);
bolodFashion.addItem("threePices", 990, 10);
bolodFashion.addItem("babyDress", 520, 5);
bolodFashion.showAllItems();
	//output : ["babyDress", "pant", "t-shirt", "threePices"]
	
bolodFashion.payRent(500);
	//output : "Today our shop rent payment successfully done."
	
bolodFashion.payRent(2000);
	//output : "Sorry, today we do not achive our sales target, tomorrow we will pay you."	
