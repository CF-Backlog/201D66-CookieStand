'use strict';


console.log('working on sales');

// 6. Seattle
//     * 6am: 16 cookies
//     * 7am: 20 cookies
//     * 8am: 35 cookies
//     * 9am: 48 cookies
//     * 10am: 56 cookies
//     * 11am: 77 cookies
//     * 12pm: 93 cookies
//     * 1pm: 144 cookies
//     * 2pm: 119 cookies
//     * 3pm: 84 cookies
//     * 4pm: 61 cookies
//     * 5pm: 23 cookies
//     * 6pm: 42 cookies
//     * 7pm: 57 cookies
//     * Total: 875 cookies

// ===================Stores=====================

// ==============all the stores==================
// var winkeltjes = function(location, min, max, avrg) {
//   this.location = locaton;
//   this.min = min;
//   this.max = max;
//   this.avrg = avrg;
  
//   this.cookieSimulator = [];
//   this.custPerHour = function(){
//     return Math.floor(((Math.random() * (this.max - this.min)) + this.min) * this.avrg);
//   }
// }

// var winkeltjesArray = new Array();
// storesArray.push(new winkeltjes('Tokyo', 3, 24, 1.2));
// ===============================================

var Seattle = {
  location : 'Seattle',
  minCustomer : 23,
  maxCustomer : 65,
  avgCookieSale : 6.3,
} 
     

var Tokyo = {
  location : 'Tokyo',
  minCustomer : 3,
  maxCustomer : 24,
  avgCookieSale :1.2,
}  

var Dubai = {
  location : 'Dubai',
  minCustomer :11,
  maxCustomer :38,
  avgCookieSale :3.7,
}  

var Paris = {  
  location : 'Paris',
  minCustomer :20,
  maxCustomer :38,
  avgCookieSale :2.3,
}  

var Lima = {
  location : 'Lima',
  minCustomer :2,
  maxCustomer :16,
  avgCookieSale :4.6,
}  

// return Lima;
// return Dubai;
// return Paris;
// return Tokyo;
return Seattle;

//   cookie : function(){
//     var oneHourCookie = getRandomIntInclusive(this.minCustomer, this.maxCustomer) * this.avgCookieSale;
//     return oneHourCookie
//     } 

// } 
// seattle.render();

// ====================== opening hours array? =====================================
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

for ( var i = 0 ; i < hoursArray.length ; i++) 
console.log(hoursArray[i]);

    // var cookieDay = { 
    
    //   cookie : function(){
    //     this.allTheCookie = getRandomIntInclusive(this.minCustomer, this.maxCustomer) * this.avgCookieSale,
    //     return allTheCookie
    //   }  
    // }

    // for ( var i = 0 ; i < 14 ; i++) {
    //   console.log(cookies[i]);

    // }

// write another method
// to call cookie method once for each hour = 14 times

// for each of the 14 times a number is generated, make a bullet on a list

function getRandomIntInclusive(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
  // min max ceil floor not relevant yet
  
  
  //The maximum is inclusive and the minimum is inclusive 
}///////math.random////////
























// for loop
// generate random number (mdn?) (first of an hour)
// add method to object
// compare min to max -- then compare to avg
// cookie sale number needs to go to front end
// create list element
// give list element content of cookie sale number
// apend to list in sale.html

// function getRandomIntInclusive(min, max) {
//   min = minCustomer.ceil(min);
//   max = maxCustomer.floor(max);
//   return Math,floor(Math.random() * (max - min + 1)) + min;
// }



//While the getRandomInt() function above is inclusive at the minimum, it's exclusive at the maximum. What if you need the results to be inclusive at both the minimum and the maximum? The getRandomIntInclusive() function below accomplishes that