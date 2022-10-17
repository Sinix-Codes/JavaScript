//__________________________________________Bind_______________________________________________
let phone1 = {
    name: 'Oppo',
    battery:30,
    batteryCharging : function(a,b,c){
        this.battery = this.battery + a + b + c;
    }
}

let phone2 = {
    name : 'vivo',
    battery : 20,
}

//Function logic applying for phone2 object

let bound = phone1.batteryCharging.bind(phone2);
//bind method returns a function which does not get called immediately,but it is use in such scenarios where we want to use or call this function in any later stage of the code
bound(10,20,10);
console.log('phone2',phone2);
