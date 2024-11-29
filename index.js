let N= + prompt('Enter the number 1')
let M= + prompt('Enter the number 2')

function isPrime(x){
if (x<=1)return false;
if (x<=3) return true;
if (x % 2==0||x % 3==0) return false;
return true;
}


function getPrime(num1,num2) {
    if (num1>num2) {
     return console.log('the number 2 must be more than number 2 ');
    }
    for (let i=num1 ; i < num2; i++) {
    if (isPrime(i)) {
        console.log(i);
        
    }
    }
}
getPrime(N,M)

