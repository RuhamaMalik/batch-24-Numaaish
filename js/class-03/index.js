/////////////////////////

// let price = 20;
// let deliveryCharges = 5;

// // let total = 10 + 5;
// let total = price + deliveryCharges;
// console.log(total); // 25


// let age = "10";
// console.log(age + 1); // 101

// console.log(typeof  age); // undefined, 101, 10+1
// console.log(typeof  null); // 


// let total = 10;
// let newProd = 5;

// console.log(total);// 10

// total = total + newProd;
// console.log(total);// 15

//////////////////////// Familiar operators


// console.log(5 + 5);
// console.log(5 - 5);
// console.log(5 * 5);
// console.log(5 / 5);
// console.log(2 ** 3);
// console.log( 5 % 2); ///  1 reminder
// console.log(9 % 3); // 0

// /////////////////// Unfamiliar operators

///////// pre (increament ++ , decreament --)  

// let num = 9;
// preInc = preInc + 1;
//  ++num;

// console.log(num); // 10


///////// post (increament ++ , decreament --)

// let postInc = 1;
// postInc++;

// console.log(postInc); // 2, 1

///////////////////////// example

// let num = 1;// 3
//             2   + 5 +  2
// let result = ++num + 5 + num++;

// console.log(num); // 3
// console.log(result); // 9


/////////////////////////


// let num = 1; // 5
// //             1   - 4 +   3   +   4   -  4
// let result = num++ - 4 + ++num + ++num - num++;

// console.log(num); // 5
// console.log(result); // 0

//////////////////////////

// let num = 7; // 7


// //            7   +   9   +   8   + 3 -  8
// console.log(num++ + ++num + --num + 3 - num--); //19
// console.log(num); // 7

// let i = 13; // 14
// //           12 + 12 + 13 * 3 -  14 + 14  + 2 + 13
// //            24+39+15
// //            78
// console.log(--i + i + ++i * 3 - ++i + i-- + 2 + i++); //78
// console.log(i); // 14


//////////////////////// Eliminating ambiguit (BO[DM][AS] Rule)

// console.log(5 + 6 * 3 + 2); //25
// console.log((5 + 6) * 3 + 2); // 34


////////////////////////////////// Assignment Operator

// let num = 5;

// // num = num + 5;
// // num +=  5;
// // num **=  3;

// console.log(num);// 125




// console.log(5 + 5); // 10
// console.log('5' + 5); // 55 string

// console.log('ruhama' - 5); // 0 number
// console.log('5' - 5); // 0 number
// console.log('5' * 5); // 25 number


// console.log("Ruhama" + " " + "Gull");
// console.log("Ruhama " + "Gull");

// let fName = "Ruhama";
// let lName = "Gull";

// console.log(fName + " " + lName); // Ruhama Gull


// console.log(2 + 4 + "Batch24 "); //   6Batch24
// console.log( "Batch24" + 2 + 4); // Batch2424
// console.log( "Batch24" + (2 + 4)); // Batch2424
// console.log(5 + "3a"); // 53a
// console.log(5 + "3 a"); // 53a
// console.log(5 - "3 a"); // NaN
// console.log(1 + true); //  2
// console.log(1 + false); //  1

