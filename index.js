// // add solution here
// function theBeatlesPlay(musicians, instruments) {
//   let array = [];
//   for(var i = 0; i < musicians.length; i++){
// array.push(`${musicians[i]} plays ${instruments[i]}`);
//   }
// return array;
// }
//
// function johnLennonFacts(array) {
//   var i = 0
//   while (i < array.length) {
//     array[i] += '!!!'; i++;
//   }
//   return array;
// }
//
//
//
// function iLoveTheBeatles(number) {
//   var arr = [];
//   var i = 0;
//   do {
//     arr.push('I love the Beatles!');
//     i++;
//   } while (i <= number && number < 15);
//   return arr;
// }
// function theBeatlesPlay(musicians, instruments){
//   var oneOne = [];
//   for (var i = 0; i < musicians.length; i++) {
//     oneOne.push(`${musicians[i]} plays ${instruments[i]}`)
//   }
//   return oneOne;
// }
// function johnLennonFacts(array) {
// var i = 0
// while (i < array.length) {
//   array[i] += `!!!`; i++;
// }
// return array;
// }
//
// function iLoveTheBeatles(number) {
//   var stores = [];
//   var i = 0;
//   do {
//     stores.push(`I love the Beatles!`)
//     i++;
//   } while (i <= number &&  number <= 15)
//   return stores;
// }

function theBeatlesPlay(musicians, instruments) {
  var songNow = [];
  var i = 0;
  for (var i = 0; i < musicians.length; i++) {
    songNow.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return songNow;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] += "!!!"; i++;
  }
  return array;
}
function iLoveTheBeatles(number) {
  var usedTo = [];
  var i = 0;
  do {
    usedTo.push(`I love the Beatles!`)
   i++;
 } while (i < number && number < 15);
  return usedTo;
}
