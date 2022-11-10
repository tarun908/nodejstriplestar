function hello1(x,f2){
    console.log("Hello World ",x);
    f2();
}


let y = 10 
let f1 = (name) =>{
    console.log("Hey", name)
}

hello1(10, ()=>{f1("tarun")})
