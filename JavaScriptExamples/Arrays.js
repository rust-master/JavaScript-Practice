let selectedColors = ['red','blue','green'];
selectedColors[3] = 1;
console.log(selectedColors);
console.log(typeof selectedColors);
console.log(selectedColors.length);

let arry = [1,2,3,4,5];

let num = 9;

for(let i=0; i<arry.length; i++){
    arry[i] += num;
}
console.log(arry);