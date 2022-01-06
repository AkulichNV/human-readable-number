module.exports = function toReadable (number) {
    let str = '';
	let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let oneTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let arr = number.toString().split('').map(Number); 
  if (arr.length == 3) {
  	str += ones[arr[0]] + ' hundred';
    if (arr[1] == 1) {
    	str += ' ' + oneTens[arr[2]];
    } else if (arr[2] > 0){
    	str += (arr[1]==0? '':' ') + tens[arr[1]] + ' ' + ones[arr[2]];
    }else{
      str += (arr[1]==0? '':' ') + tens[arr[1]];
    }
  } else if (arr.length == 2) {
    if (arr[0] == 1) {
    	str += oneTens[arr[1]];
    } else if(arr[1] > 0){
      str += tens[arr[0]] + ' ' + ones[arr[1]];
    } else {
    str += tens[arr[0]];
    }
  } else {
  	str += ones[arr[0]];
  }
  return str;
}
