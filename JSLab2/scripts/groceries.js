// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "strawberry ($0.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.99
	},
	{
		name: "banana ($1.75)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.75
	},
	{
		name: "brocoli ($1.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread ($2.35)",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "milk ($4.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99
	},
	{
		name: "baguette ($4.99)",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 4.99
	},
	{
		name: "salmon ($10.00)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},

	{
		name: "ketchup ($11.99)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 11.99
	},
	{
		name: "frozen meatballs ($19.99)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 19.99
	},
	{
		name: "steak ($29.99)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 29.99
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		 if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}