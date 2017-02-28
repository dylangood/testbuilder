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
  var prefix = cardNumber.slice( 0, 6 );

  if( cardNumber.length === 14 ) {
  	if( prefix[0] === '3' && ( prefix[1] === '8' || prefix[1] === '9' ) ) {
  	  return 'Diner\'s Club';
  	}
  }

  if( cardNumber.length === 15 ) {
  	if( prefix[0] === '3' && ( prefix[1] === '4' || prefix[1] === '7' ) ) {
  	  return 'American Express';
  	}
  }

  if( cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19 ) {
    if( prefix === '564182' || prefix === '633110' || prefix.slice(0,4) === '4903' ||
        prefix.slice(0,4) === '4905' || prefix.slice(0,4) === '4911' || prefix.slice(0,4) === '4936' ||
        prefix.slice(0,4) === '6333' || prefix.slice(0,4) === '6759' 
      ) {
      return 'Switch';
    }
  }

  if( cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19 ) {
  	if( prefix[0] === '4' ) {
  		return 'Visa';
  	}
  }

  if( cardNumber.length === 16 ) {
  	if( prefix[0] === '5' && ( Number( prefix[1] ) >= 1 && Number( prefix[1] ) <= 5 ) ) {
  	  return 'MasterCard';
  	}
  }

  if( cardNumber.length === 16 || cardNumber.length === 19 ) {
    if( prefix.slice(0,4) === '6011' || prefix.slice( 0, 2 ) === '65' || 
    	( Number( prefix.slice( 0, 3 ) ) >= 644 && Number( prefix.slice( 0, 3 ) ) <= 649 )
      ) {
      return 'Discover';
    }
  }

  if( cardNumber.length >= 12 && cardNumber.length <= 19 ) {
  	if( prefix.slice(0,4) === '5018' || prefix.slice(0,4) === '5020' || 
        prefix.slice(0,4) === '5038' || prefix.slice(0,4) === '6304' ) {
  	  return 'Maestro';
  	}
  }

  if( cardNumber.length === 16 ||cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19 ) {
    if( ( Number(prefix.slice(0,6)) >= 622126 && Number(prefix.slice(0,6)) <= 622925 ) || 
        ( Number(prefix.slice(0,4)) >= 6282 && Number(prefix.slice(0,4)) <= 6288 ) ||
        ( Number(prefix.slice(0,3)) >= 624 && Number(prefix.slice(0,3)) <= 626 ) 
      ) {
      return 'Switch';
    }
  }

};
