//__________________________________________Call_______________________________________________
let phone1 = {
    name: 'Oppo',
    battery:30,
    batteryCharging : function(a){
        this.battery = this.battery + a ;
    }
}

phone1.batteryCharging(50);
console.log(phone1,' phone1details');

let phone2 = {
    name : 'vivo',
    battery : 40,
}

//Function logic applying for phone2 object
phone1.batteryCharging.call(phone2,30);
console.log('phone2',phone2);
