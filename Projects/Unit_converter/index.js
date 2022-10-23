let feet = document.getElementById('feet');
let inch = document.getElementById('inch');
let cel = document.getElementById('cel');
let far = document.getElementById('far');

feet.addEventListener('input', function(e){
    // console.log("Changed");
    let f = this.value;
    let i = f*12;

    inch.value = i;
})

inch.addEventListener('input', function(e){
    // console.log("Changed");
    let i = this.value;
    let f = (i/12);

    if(!Number.isInteger(f))
    {
        f = f.toFixed(2)
    }

    feet.value = f;
})

cel.addEventListener('input',function(e){
    let c = this.value;
    let h = c * (9/5) + 32

    far.value = h;
})

far.addEventListener('input',function(e){
    let h = this.value;
    let c = (h-32)*(5/9) ;

    cel.value = c;
})

kg.addEventListener('input',function(e){
    let k = this.value;
    let p = k * 2.20462262;
    pd.value = p;
})

pd.addEventListener('input',function(e){
    let p = this.value;
    let k = p / 2.20462262;

    kg.value = k;
})