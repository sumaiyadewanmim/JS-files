//infinity For Loops

// var isRunning = true;
// while (isRunning) {
//   var rand = Math.floor(Math.random() * 10 + 1);
//   if (rand === 9) {
//     console.log("Winner Winner Chiken Dinner");
//     isRunning = false;
//   } else {
//     console.log("You Have Got " +  rand);
//   }
// }

for (;;) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner Winner Chiken Dinner");
    break;
  } else {
    console.log("You Have Got " + rand);
  }
}
