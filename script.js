// ================= work 1 ================= //

// const productName = "Droid";
// const pricePerItem = 2000;

// ================= work 2 ================= //

// let productName = "Droid";
// productName = "Repair droid"
// console.log(productName); // Repair droid

// let pricePerItem = 2000;
// pricePerItem = pricePerItem + 1500
// console.log(pricePerItem); // +1500

// ================= work 3 ================= //

// let topSpeed = 160
// let distance = 617.54
// let login = "mango935"
// let isOnline = true
// let isAdmin = false

// ================= work 4 ================= //

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;

// ================= work 5 ================= //

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = "You picked " + productName + ", price per item is " + pricePerItem + " credits";
// console.log(message)

// ================= work 6 ================= //

// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// let totalPrice = pricePerDroid*orderedQuantity+deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message)

// ================= work 7 ================= //

// function sayHi () {
//     console.log("Hello, this is my first function!")
//   }
//   sayHi();

// ================= work 8 ================= //

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
//     // Change code above this line
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// ================= work 9 ================= //

// function add(a, b, c) {
//     // Change code below this line
  
//   return a + b + c
  
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// ================= work 10 ================= //  

// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
//   };

// ================= work 11 ================= //    

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity*pricePerItem;
  
//     // Change code above this line
//     return totalPrice;
//   };

// ================= work 12 ================= //      

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
//     let TotalPrice = orderedQuantity*pricePerDroid+deliveryFee;
//   const message = `You ordered droids worth ${TotalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
  
//     // Change code above this line
//     return message;
//   }
  
//   makeOrderMessage (2, 100, 50)
//   makeOrderMessage (4, 300, 100)
//   makeOrderMessage (10, 70, 200)

// ================= work 13 ================= //   

// function isAdult(age) {
//     // Change code below this line
//     const passed = age >= 18;
//   console.log()
//     // Change code above this line
//     return passed;
//   }
  
//   isAdult(20)
//   isAdult(14)
//   isAdult(8)
//   isAdult(37)

// ================= work 14 ================= //     

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = password === SAVED_PASSWORD;
  
//     // Change code above this line
//     return isMatch;
//   }

// ================= work 15 ================= //    

// function checkAge(age) {
//     let message;
  
//     if (age>=18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }

// ================= work 16 ================= //      

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
    
//     if (ordered>available) { 
//       message = 'Not enough goods in stock!'
  
//     } else {
//       message = 'Order is processed, our manager will contact you.';
//     }
//     // Change code above this line
//     return message;
//   }
  
//   checkStorage();

// ================= work 17 ================= //        

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


// ================= work 18 ================= //      

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     let totalPrice = pricePerDroid * orderedQuantity;
//     let balance = customerCredits - totalPrice;
  
//      if (totalPrice > customerCredits) { 
//       message = 'Insufficient funds!';
  
//     } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${balance} credits left`;
//      }
       
//     // Change code above this line
//     return message;
//   }
  
//   makeTransaction()

// ================= work 19 ================= //  

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
//   console.log(message)
//     return message;
//   }
  
//   checkPassword("mangohackzor") 
//   checkPassword(null)
//   checkPassword("polyhax")
//   checkPassword("jqueryismyjam") 

// ================= work 20 ================= //  


