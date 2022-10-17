
// document.getElementById('myButton').addEventListener('click',()=>{
//     console.log('Button is clicked');
// })


//____________________________________Throttle_____________________________________


throttle = (fn,delay) =>{
    let last = 0 ;
    return (...args) =>{
        let now = new Date().getTime();
        if(now - last < delay){
            return;
        }
        last = now;
        return fn(...args);
    }
}

document.getElementById('myButton').addEventListener('click',throttle(e =>{
    console.log('Button is clicked');
},5000))