var nameArray = new Array();

do {
  yourName = prompt("Hi, may I have your name pls? Enter Multiple Names and Continue by Entering an Empty String");
  nameArray.push(yourName);
  if(yourName == '') {
      nameArray.pop();
  };
} while(yourName !== '');

alert("Welcome to WT's Food Place " + nameArray.join(" and "));

var numPeople = nameArray.length;
//parseInt(prompt("How many people will you be ordering for?"));

var food = ["RICE", "VEG", "MEAT"];

alert("Menu: " + food.join(" and "));

var cashRegister = {
   total: 0,
   transactionAmount: 0,
   add: function (itemCost) {
       this.total += itemCost;
       this.transactionAmount  = itemCost;
   },
   scan: function (item, qty) {
       switch(item) {
           case food[0]:
               this.add(qty*3);
               break;
           case food[1]:
               this.add(qty*4);
               break;
           case food[2]:
               this.add(qty*5);
               break;
       };
   return true;
   },
   voidLastTransaction: function () {
       this.total -= this.transactionAmount;
   }

};

do {
   var foodDemand = prompt("What food would you like to order?").toUpperCase();
   cashRegister.scan(foodDemand, numPeople);
} while(foodDemand !== '');
//cashRegister.scan(food, numPeople);

alert("Your food is coming right up!");

var memberDiscount = prompt("Are you a member (YES or NO)?").toUpperCase();

var creditCards = ["VISA", "MASTERCARD", "NETS"];

if(memberDiscount == "YES") {

   var typeOfCard = prompt("Which card would you like to use? Visa, Mastercard, or NETS?").toUpperCase();
   //cashRegister.total = cashRegister.total * 0.9;
}

switch(typeOfCard) {
   case 'VISA':
       cashRegister.total = cashRegister.total * 0.9;
       break;
   case 'MASTERCARD':
      cashRegister.total = cashRegister.total * 0.8;
      break;
   case 'NETS':
      cashRegister.total = cashRegister.total * 1.2;
      break;
   default:
       alert("We do not cater to that card");
};

confirm("Total Bill: " + (cashRegister.total*1.17) + " with GST");

var leave = prompt("Do you choose to EXIT, TIP or COMPLAIN?").toUpperCase();

var ratings = Math.floor(Math.random()*2);

switch(leave) {
   case 'EXIT':
       alert("Goodbye " + nameArray.join(" and "));
       break;
   case 'TIP':
       alert("You tip them $" + cashRegister.total * 0.15);
       break;
   case 'COMPLAIN':
       if(ratings<=0.9) {
           alert("We are very sorry, your bill is now $" + cashRegister.total * 0.5);
       }
       else {
           alert("The head chef charges out of the kitchen and slices you up!");
       };
       break;
   default:
       alert("That is not an option");
};
