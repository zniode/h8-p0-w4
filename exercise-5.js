function ubahHuruf(kata) {
    // you can only write your code here!
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var letterIndex = 0;
    var nextLetter = '';
    
    for(var i = 0; i < kata.length; i ++) {
      letterIndex = alphabet.indexOf(kata[i]);
      nextLetter += alphabet[letterIndex+1];
    }
    return nextLetter;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu