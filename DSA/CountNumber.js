//count the number of digits
//34252:5
//-121=
function countDgits(num){
    num+=Math.abs(num);
    let count=0;
    do{
        count++;
        num=Math.floor(num/10);
    }
    while(num>0)
return count;
    
}
console.log(countDgits(-121));
console.log(countDgits(34252));