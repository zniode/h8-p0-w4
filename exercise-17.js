function totalDigitRekursif(angka) {
    // you can only write your code here!
    var strAngka = angka.toString();
    if(strAngka.length==1){
      return Number(angka)
    }else{
      var firstDigit = Number(strAngka[0])
      nextDigit = strAngka.slice(1)
      return firstDigit + totalDigitRekursif(Number(nextDigit))
    }
    
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5