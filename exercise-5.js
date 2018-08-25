function ubahHuruf(kata) {
    // you can only write your code here!
    var alphabet = 'abcdefghijklmnopqrstuvwxyza';
    var letterIndex = 0;
    var nextLetter = '';
    
    for(var i = 0; i < kata.length; i ++) {
      letterIndex = alphabet.indexOf(kata[i]);
      nextLetter += alphabet[letterIndex+1];
    }
    return nextLetter;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wowz')); // xpx
  console.log(ubahHuruf('developerz')); // efwfmpqfs
  console.log(ubahHuruf('javascriptz')); // kbwbtdsjqu
  console.log(ubahHuruf('kerenz')); // lfsfo
  console.log(ubahHuruf('semangatz')); // tfnbohbu