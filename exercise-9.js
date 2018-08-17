function tukarBesarKecil(kalimat) {
    var splitWord = kalimat.split('');
    var resultWord = [];
  
    for (var i = 0; i < kalimat.length; i++) {
      if (splitWord[i] === splitWord[i].toUpperCase()) {
        resultWord[i] = splitWord[i].toLowerCase(); 
      } else if (splitWord[i] === splitWord[i].toLowerCase()) {
        resultWord[i] = splitWord[i].toUpperCase(); 
      }
    }
    return resultWord.join('');
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"