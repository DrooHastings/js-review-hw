// console.log('JS sourced');

function isEvenOrOdd(num) {
  if (num % 2 ===0) {
    return  'even';
  } else {
    return 'odd';
  }
}


console.log(isEvenOrOdd(3988));


// function isEvenOrOdd(num) {
// if (int % 2 === 0 ) ? 'even':'odd';
// }

function makeTitle(str) {
  var arrayOfStrings = str.split(' ');
  // console.log(arrayOfStrings);
  // for (var i = 0; i < arrayOfStrings.length; i++) {
  //   var firstLetter = arrayOfStrings[i].substring(0,1);
  //   var capLetter= firstLetter.toUpperCase();
  //   console.log('capLetter', capLetter);
  //   arrayOfStrings.join(capLetter);
  //   console.log(arrayOfStrings);

    console.log(arrayOfStrings[0].toUpperCase() + str.slice(1));
  }




makeTitle('pizza beer food things');
