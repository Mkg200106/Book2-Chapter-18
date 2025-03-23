// declare globals
let money = 20;
let lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
buys specified number of sandwiches per day at current prices
*/
function buyLunches() {
  resetForm()
  let day = 0
  while (money > 0) {
    let priceToday = getSandwichPrice();
    let numberOfSandwiches = document.getElementById("numSandwiches").value;
    let totalPrice = priceToday * numberOfSandwiches;
    if (money >= totalPrice) {
      money = money - totalPrice;
      day++;
      lunches++;
      document.getElementById("receipt").innerHTML +=
        "<p>On day " +
        day +
        ", sandwiches are: $" +
        priceToday +
        ". You have $" +
        money.toFixed(2) +
        "left.</p>";
    } else {
      document.getElementById("receipt").innerHTML +=
        "<p>Today,sandwiches are: $" +
        priceToday +
        ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
      money = 0;
    }
  }
  document.getElementById("receipt").ineerHTML +=
    "<p>You bought " + lunches + " luches this week.</p>";
}
/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
    let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
    return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";

}