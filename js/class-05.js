// let isActive = false;

// if (isActive) {
//     console.log("Active");
// } else {
//     console.log("Last seen");
// }

///////////////////////////

// let username = 'Ruhama';

// if (username === 'Ruhama') {
//     console.log('Teacher Profile');
// } else {
//     console.log('Student Profile');
// }

///////////////////////////

// let capital = prompt('What is the capital of Pakistan?');
// let correctAns = 'Islamabad';

// if (capital === correctAns) {
//     console.log(`Correct Answer!`);
// } else {
//     console.log(`Padh liya karo!`);
// }


///////////////////////////


// let number = +prompt('Enter Number');

// if (number % 2 === 0) {
//     console.log(number + ' Number is Even');
// } else {
//     console.log(number + ' Number is Odd');
// }


///////////////////////////

// let isRaining = false;
// if (isRaining) {
//     console.log('Samosa + Pakoda + kecthup + chutni');
// } else {
//     console.log('Daal Chawal');
// }


///////////////////// if, else if, else

// let nashta = prompt('Enter Nashta type!', 'HalwaPoori');

// if (nashta === 'HalwaPoori') {
//     console.log('Mainy tw bola tha yahi ayega!');
// } else if (nashta === 'Anda Paratha') {
//     console.log('Mazy Mazy!');
// }
// else if (nashta === 'Butter n Bread') {
//     console.log('Yummmyyyyyy!');
// } else {
//     console.log('Moye Moye!');
// }


////////////////////////////////

// let number = +prompt('Enter Number!');

// if (number > 10) {
//     console.log('greater than 10');
// }
// else if (number < 10) {
//     console.log('less than 10');
// }
// else if (number === 10) {
//     console.log('Equals to 10');
// } else {
//     console.log('Invalid Input');
// }

////////////////////////////////  nested if else

// let email = 'test@gmail.com';
// let password = '12345';

// let userEmail = prompt("Enter Your Email");
// let userPswd = prompt("Enter Your Password");

// if (userEmail === email) {
//     if (userPswd === password) {
//         console.log('User SignIn successfully!');
//     } else {
//         console.log('Incorrect password');
//     }
// } else {
//     console.log('Incorrect Email');
// }


//////////////////////////////// Logical Operators (&& (AND) , ||(OR))
//// compare two or more conditions

// 2 === 2 // true

// console.log(true && true); // true
// console.log(true && 'abcd'); // abcd
// console.log(true && false); // false
// console.log(false && 'abcd'); // false
// console.log(null && 'abcd'); // null
// console.log('imama' && undefined && true); // undefined
// console.log(-5 && 'undefined' && true); // true


// console.log(undefined || false); // false

// console.log(null !== undefined);

// console.log(null || ('ruhama' && null) && (false || 5)); // null 
//           null || null && 5


///////////////////////////////////

let email = 'test@gmail.com';
let password = '12345';

let userEmail = prompt("Enter Your Email");
let userPswd = prompt("Enter Your Password");

if ((userEmail === email) && (userPswd === password)) {
    console.log('User SignIn successfully!');
} else {
    console.log('Invalid credentials');
}







