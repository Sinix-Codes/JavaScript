//__________________________________________Apply_______________________________________________
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
arr = [10,20,10];
phone1.batteryCharging.apply(phone2,arr);
//_____________________OR______________________
// phone1.batteryCharging.apply(phone2,[10,20,10]);

console.log('phone2',phone2);
