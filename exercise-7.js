function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var squareResults = 0;
    var numberFactor;
    var arr = [];
    
    for(var i = 0; i <= angka; i++) {
      for(var j = 0; j <= angka; j++) {
        // console.log(i + '-' + j);
        squareResults = i * j;
        // console.log(squareResults)
        if (squareResults === angka) {
          numberFactor = String(i) + String(j);
          // console.log(numberFactor)
          arr.push(numberFactor);
          // console.log(arr)
        }
      }
    }
    var minimumDigit = arr[0].length;
    for(var k = 0; k < arr.length; k++){
      if(arr[k].length < minimumDigit){
        minimumDigit = arr[k].length;
      }
    }
    return minimumDigit;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2