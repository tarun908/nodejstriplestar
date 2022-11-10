setTimeout(p1,8000)
function p1(){
    console.log("call pizza")
    setTimeout(p2,4000)
}
function p2(){
    console.log("prepared order")
    setTimeout(p3,2000)
}
function p3(){
    console.log("delivered")
    
}