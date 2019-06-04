// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  let aE = 'American Express';
  let dC = "Diner's Club";

  let vS = 'Visa';
  let arrVS = [13, 16, 19];

  let mC = 'MasterCard';
  let arrMC = ['51', '52', '53', '54', '55'];

  let dS = 'Discover';
  let arrPrefixDS = ['6011', '644', '645', '646', '647', '648',
    '649', '65'
  ];
  let arrLengthDS = [16, 19];

  let mA = 'Maestro';
  let arrPrefixMA = ['5018', '5020', '5038', '6304'];
  let arrLengthMA = [12, 13, 14, 15, 16, 17, 18, 19];

  let cH = 'China UnionPay';
  let arrPrefixCH = [];
  for (let i = 622126; i <= 622925; i++) {
    arrPrefixCH.push(i);
  }
  for (let i = 624; i <= 626; i++) {
    arrPrefixCH.push(i);
  }
  for (let i = 6282; i <= 6288; i++) {
    arrPrefixCH.push(i);
  }
  arrPrefixCH = arrPrefixCH.map(ele => ele.toString());
  let arrLengthCH = [16, 17, 18, 19];

  let sW = 'Switch';
  let arrPrefixSW = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759
    ]
    .map(num => num.toString());
  let arrLengthSW = [16, 18, 19];

  cardNumber = cardNumber.toString();
  let firstTwo = cardNumber.slice(0, 2);
  let firstThree = cardNumber.slice(0, 3);
  let firstFour = cardNumber.slice(0, 4);
  let firstSix = cardNumber.slice(0, 6);

  if (cardNumber.length === 14 && (firstTwo === '38' || firstTwo === '39')) {
    return dC;
  } 
  else if (cardNumber.length === 15 && (firstTwo === '34' || firstTwo === '37')) {
    return aE;
  }

  else if (cardNumber.length === 16 && arrMC.includes(firstTwo)) {
    return mC;
  }
  else if (arrLengthDS.includes(cardNumber.length) &&
  (arrPrefixDS.includes(firstTwo) ||
  arrPrefixDS.includes(firstThree) ||
  arrPrefixDS.includes(firstFour)
  )
  ) {
    return dS;
  } else if (arrLengthMA.includes(cardNumber.length) && arrPrefixMA.includes(firstFour)) {
    return mA;
  }
  else if (arrLengthCH.includes(cardNumber.length) &&
  (arrPrefixCH.includes(firstThree) ||
  arrPrefixCH.includes(firstFour) ||
  arrPrefixCH.includes(firstSix)
  )) {
    return cH;
  }
  else if (arrLengthSW.includes(cardNumber.length) &&
    (arrPrefixSW.includes(firstFour) || arrPrefixSW.includes(firstSix))
  ) {
    return sW;
  }
  /* visa's if statement moved below switch's if statement to prevent 
  mistaking switch's prefix for visa's */
  else if (arrVS.includes(cardNumber.length) && (firstTwo[0] === '4')) {
    return vS;
  }
  return undefined;
};




