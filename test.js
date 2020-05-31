console.log("Comnsole log"); 

document.write("From JS");

document.getElementById('first').innerHTML = "Inside Div First";

let sayHello = function() {
    console.log(sum(2)(3)(4)()); 
    alert("Console should show 9");
}

let sum = function(a) {
    return function(b) {

        if(b) {
            return sum(a+b); 
        }
        return a;
    }

}