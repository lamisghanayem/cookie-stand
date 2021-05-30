'use strict';

let FirstContainer = document.getElementById('CookiesSales');


const Seattle = {

    ShopLocation: 'Seattle',
    MinCustomerPerHour: 23,
    MaxCustomerPerHour: 65,
    AvgCookiePerCustomer: 6.3,
    CustomerPerHour: [],
    HoursArr: ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', 'Total Sales'], //make it global
    CookiePerHour:[],
    CookiesArr: [],
    //LocationArr: ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'],

    NumberOfCustomerPerHour: function(){
        for(let i=0; i < this.HoursArr.length; i++) {
            this.CustomerPerHour[i] = Math.floor(Math.random() * (this.MaxCustomerPerHour - this.MinCustomerPerHour + 1) ) + this.MinCustomerPerHour;
        }
    },

    NumberOfCookiesPerHour: function(){
        for (let i = 0; i < 14; i++) {
            this.CookiePerHour [i] = Math.floor (this.AvgCookiePerCustomer*this.CustomerPerHour[i]);
            this.CookiesArr.push(this.CookiePerHour[i]);

        }
console.log(this.CookiesArr);
    }, 

    TotalSales: function(){
    let cookiesTotal = 0;
    for (let j = 0; j < 14; j++) {
         cookiesTotal = cookiesTotal +this.CookiesArr[j];
        
    }

    this.CookiesArr.push(cookiesTotal);
   //console.log (cookiesTotal);
    },
    
  

    render:function(){
        let h3El = document.createElement('h3');
        FirstContainer.appendChild(h3El);
        //h3El.textContent = this.ShopLocation;
        h3El.textContent = 'Seattle';


        let ulEl = document.createElement('ul');
        FirstContainer.appendChild(ulEl);

        for(let i = 0 ; i < this.CookiesArr.length ; i++){
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${this.HoursArr[i]} : ${this.CookiesArr[i]}`

    }
    },

};


 Seattle.NumberOfCustomerPerHour();
 Seattle. NumberOfCookiesPerHour();
 Seattle.TotalSales();
 Seattle.render();
 