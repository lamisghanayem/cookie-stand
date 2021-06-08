'use strict';

//let FirstContainer = document.getElementById('CookiesSales');


/*const Seattle = {

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
            this.CustomerPerHour[i] = Math.floor(Math.random() * (this.MaxCustomerPerHour - this.MinCustomerPerHour + 1) ) + this.MinCustomerPerHour; // this is good way only if we have the customer per hour array is empty, if it has 2 values it is gonna be wrong
            //this.CustomerPerHour.push(this.CookiePerHour[Math.floor(Math.random() * (this.MaxCustomerPerHour - this.MinCustomerPerHour + 1) ) + this.MinCustomerPerHour;]);


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
    
  

    render : function(){
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

 const Tokyo = {

    ShopLocation: 'Tokyo',
    MinCustomerPerHour: 3,
    MaxCustomerPerHour: 24,
    AvgCookiePerCustomer: 1.2,
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
    
  

    render : function(){
        let h3El = document.createElement('h3');
        FirstContainer.appendChild(h3El);
        //h3El.textContent = this.ShopLocation;
        h3El.textContent = 'Tokyo';


        let ulEl = document.createElement('ul');
        FirstContainer.appendChild(ulEl);

        for(let i = 0 ; i < this.CookiesArr.length ; i++){
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${this.HoursArr[i]} : ${this.CookiesArr[i]}`

    }
    },

};

Tokyo.NumberOfCustomerPerHour();
Tokyo. NumberOfCookiesPerHour();
Tokyo.TotalSales();
Tokyo.render();

 const Dubai = {

    ShopLocation: 'Dubai',
    MinCustomerPerHour: 11,
    MaxCustomerPerHour: 38,
    AvgCookiePerCustomer: 3.7,
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
    
  

    render : function(){
        let h3El = document.createElement('h3');
        FirstContainer.appendChild(h3El);
        //h3El.textContent = this.ShopLocation;
        h3El.textContent = 'Dubai';


        let ulEl = document.createElement('ul');
        FirstContainer.appendChild(ulEl);

        for(let i = 0 ; i < this.CookiesArr.length ; i++){
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${this.HoursArr[i]} : ${this.CookiesArr[i]}`

    }
    },

};

Dubai.NumberOfCustomerPerHour();
Dubai. NumberOfCookiesPerHour();
Dubai.TotalSales();
Dubai.render();

const Paris = {

    ShopLocation: 'Paris',
    MinCustomerPerHour: 20,
    MaxCustomerPerHour: 38,
    AvgCookiePerCustomer: 2.3,
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
    
  

    render : function(){
        let h3El = document.createElement('h3');
        FirstContainer.appendChild(h3El);
        //h3El.textContent = this.ShopLocation;
        h3El.textContent = 'Paris';


        let ulEl = document.createElement('ul');
        FirstContainer.appendChild(ulEl);

        for(let i = 0 ; i < this.CookiesArr.length ; i++){
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${this.HoursArr[i]} : ${this.CookiesArr[i]}`

    }
    },

};

Paris.NumberOfCustomerPerHour();
Paris. NumberOfCookiesPerHour();
Paris.TotalSales();
Paris.render();

const Lima = {

    ShopLocation: 'Lima',
    MinCustomerPerHour: 2,
    MaxCustomerPerHour: 16,
    AvgCookiePerCustomer: 4.6,
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
    
  

    render : function(){
        let h3El = document.createElement('h3');
        FirstContainer.appendChild(h3El);
        //h3El.textContent = this.ShopLocation;
        h3El.textContent = 'Lima';


        let ulEl = document.createElement('ul');
        FirstContainer.appendChild(ulEl);

        for(let i = 0 ; i < this.CookiesArr.length ; i++){
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${this.HoursArr[i]} : ${this.CookiesArr[i]}`

    }
    },

};


Lima.NumberOfCustomerPerHour();
Lima. NumberOfCookiesPerHour();
Lima.TotalSales();
Lima.render();*/



// Lab 07 :CONSTRUCTORS
let firstContainer = document.getElementById('CookiesSales');

let tableEl = document.createElement('table')
firstContainer.appendChild(tableEl);

let hoursArr= ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

let locations = [];

let finalTotal=0;
let cookiesTotalGlobal = 0;


let arrayOfObjects = [];


function Cookie(MinCustomerPerHour, MaxCustomerPerHour, AvgCookiePerCustomer, ShopLocation ) {
this.MinCustomerPerHour = MinCustomerPerHour;
this.MaxCustomerPerHour = MaxCustomerPerHour;
this.AvgCookiePerCustomer = AvgCookiePerCustomer;
this.ShopLocation = ShopLocation;
this.CustomerPerHour = [];
this.CookiePerHour = [];
this.CookiesArr = [];
this.cookiesTotal = 0,
locations.push(this);
arrayOfObjects.push(this);


}

//Prototype

Cookie.prototype.NumberOfCustomerPerHour = function(){
    for(let i=0; i < hoursArr.length; i++) {
     this.CustomerPerHour[i] = Math.floor(Math.random() * (this.MaxCustomerPerHour - this.MinCustomerPerHour + 1) ) + this.MinCustomerPerHour;
    }
    
}

Cookie.prototype.NumberOfCookiesPerHour = function(){
    for (let i = 0; i < hoursArr.length; i++) {
        this.CookiePerHour [i] = Math.floor (this.AvgCookiePerCustomer*this.CustomerPerHour[i]);
        this.CookiesArr.push(this.CookiePerHour[i]);
        this.cookiesTotal = this.cookiesTotal +this.CookiesArr[i];     
        cookiesTotalGlobal=this.cookiesTotal;
     
    }
   
    
    
}

/*Cookie.prototype.TotalSales= function(){
   
        for (let j = 0; j < hoursArr.length; j++) {
             cookiesTotal = cookiesTotal +this.CookiesArr[j];     
        }
    }*/

    
 Cookie.prototype.tableHeader = function(){
        let firstRow = document.createElement('tr');
        tableEl.appendChild(firstRow);
        
        let th0 = document.createElement('th');
        firstRow.appendChild(th0);
        th0.textContent = ('Locations'); 

        for (let i=0; i<14; i++){
            let thEL = document.createElement('th');
            firstRow.appendChild(thEL);
            thEL.textContent = hoursArr[i];  
        }
        let th1 = document.createElement('th');
        firstRow.appendChild(th1);
        th1.textContent = ('Daily Location Total'); 

    }
    


 Cookie.prototype.render = function(){
        
    
        let secondRow = document.createElement('tr');
        tableEl.appendChild(secondRow);

        let th2 = document.createElement('th');
        secondRow.appendChild(th2);
        th2.textContent = this.ShopLocation;  
 

        for (let i=0; i<14; i++){
            let tdEl = document.createElement('td');
            secondRow.appendChild(tdEl);
            tdEl.textContent = this.CookiesArr[i];  
        }

        let tdEl2 = document.createElement('td');
        secondRow.appendChild(tdEl2);
        tdEl2.textContent = this.cookiesTotal;  
          
    
    }

   /* Cookie.prototype.tablelfooter = function(){

        let lastRow = document.createElement('tr');
        tableEl.appendChild(lastRow);

        let th3 = document.createElement('th');
        lastRow.appendChild(th3);
        th3.textContent = 'Totals';

        let dailyTotal = document.createElement('td');
        lastRow.appendChild(dailyTotal);
        dailyTotal.textContent =  `${this.cookiesTotal} `;
  
    };*/

function tablelfooter (){
        let lastRow = document.createElement('tr');
        tableEl.appendChild(lastRow);  

        let th3 = document.createElement('th');
        lastRow.appendChild(th3);
        th3.textContent = 'Totals';

        for (let i=0; i<hoursArr.length; i++){
            let tdEl1 = document.createElement('td');
            lastRow.appendChild(tdEl1);
            let total = 0;
            for (let j=0; j< locations.length; j++){
                total= total + locations[j].CookiePerHour[i];
            }
            tdEl1.textContent = total;
        }

        let tdEl2 = document.createElement('td');
        lastRow.appendChild(tdEl2);
    for (let i=0; i<locations.length; i++){
        finalTotal = finalTotal + cookiesTotalGlobal;
        tdEl2.textContent = finalTotal;
        

    }

    } 


//instances

let Seattle = new Cookie(23, 65, 6.3, 'Seattle' );

let Tokyo = new Cookie(3, 14, 1.2, 'Tokyo' );

let Dubai = new Cookie(11, 38, 3.7, 'Dubai');

let Paris = new Cookie(20, 38, 2.3, 'Paris' );

let Lima = new Cookie(2, 16, 4.6, 'Lima');




//Calling the functions
Seattle.tableHeader();

// we can put it inside a function
for (let i=0; i<arrayOfObjects.length; i++){
    arrayOfObjects[i].NumberOfCustomerPerHour();
    arrayOfObjects[i].NumberOfCookiesPerHour();
    arrayOfObjects[i].render();  
} 



/*Seattle.NumberOfCustomerPerHour();
Seattle.NumberOfCookiesPerHour();
Seattle.tableHeader();
Seattle.render();

Tokyo.NumberOfCustomerPerHour();
Tokyo.NumberOfCookiesPerHour();
Tokyo.render();

Dubai.NumberOfCustomerPerHour();
Dubai.NumberOfCookiesPerHour();
Dubai.render();

Paris.NumberOfCustomerPerHour();
Paris.NumberOfCookiesPerHour();
Paris.render();

Lima.NumberOfCustomerPerHour();
Lima.NumberOfCookiesPerHour();
Lima.render();*/

// Lab09 Forms:

const form = document.getElementById('salmonForm');

form.addEventListener('submit', handleSubmitting);

 function handleSubmitting (event){


    event.preventDefault();

   

    let newMin = Number( event.target.MinCustomer.value);
    // console.log(event.target.MinCustomer.value);

    let newMax = Number (event.target.MaxCustomer.value);

    let newAvg = parseFloat(Number( event.target.AvgCookie.value));
    //let newAvg = Number( event.target.AvgCookie.value);
    let newshop = event.target.NewLocation.value
    
    let newCookie = new Cookie (newMin, newMax, newAvg, newshop );
    //console.log(newCookie);
    //console.log(newCookie);

newCookie.NumberOfCustomerPerHour();
newCookie.NumberOfCookiesPerHour();
newCookie.render();
tableEl.deleteRow(6);
tablelfooter();

}

tablelfooter();



