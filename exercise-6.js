function hitungHuruf(kata) {
    // you can only write your code here!
   var newWord = (kata.split(' '));
   var similarLetter = [];
   
   for(var i = 0; i < newWord.length; i++){
     var newWord2 = (newWord[i].split('').sort());
    // console.log(newWord[i]);
    // console.log(newWord2); 
     for(var j = 0; j < newWord2.length; j++){
       // console.log(newWord2[j]);
       // console.log(newWord2[j+1])
       if(newWord2[j] === newWord2[j+1]){  
         similarLetter.push(newWord[i]);
       }
      }
    }  
      return (similarLetter[0]);  
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau