// for(let i=0; i<=7; i++){
//     for(let j=i; j<=i; j++){
//         console.log("#".repeat(i));
//     }
// }

// let m = 8;
// for(let i=1; i<=7; i++){
//     for(let k=i; k<=i; k++){
//         console.log("#".repeat(k), "*".repeat(m-i));
//     }
// }


let guest = 6;
let chair = 4;
let arrangments = 1;

for(let i=0; i<chair; i++){
    arrangments *= guest-i;
}

console.log(`Possible Arrangments: ${arrangments}`);

