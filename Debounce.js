
// document.getElementById('myButton').addEventListener('click',()=>{
//     console.log('Button is clicked');
// })


//____________________________________Debounce_____________________________________


debounce = (fn,delay) =>{
    let timeout ;
    return function(...args){
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            fn(...args);
        },delay)
    }
}

document.getElementById('myButton').addEventListener('click',debounce(e =>{
    console.log('Button is clicked');
},5000))