/**jod kuno number array  amra sort(lower to higher / higher to Lower) ordare sajate chai 
 * sekhetre amra sort() function use kori */


var num = [10,60,800,100,20,300,1200,80,50];

console.log(num);

/*  aikhane nicher code ta lower oreto higher oredare sort korar code */

var sortedArray = num.sort((a,b)=>{
    return a-b;
})
console.log("Sorted the numbe from lower to higher order: " + sortedArray);

/*  aikhane nicher code ta higher to lower ordare sort korar code */

var sortedArray1 = num.sort((a,b)=>{
    return b-a;
})

console.log("Sorted the numbe from  higher to lower order: " + sortedArray1);

/**sort()fution kivabe kaj kore e dekhar code */

var debag = num.sort((a,b)=>{
    console.log(`A: ${a}  B: ${b}`);
    console.log(`${a-b}`);
    return a-b;

})

console.log("The orted Array Is: " + debag);

