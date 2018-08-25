function checkAB(num) {
    var posisia = 0;
    var posisib = 0;
    for(var i = 0; i < num.length; i++){
        if(num[i] === 'a'){
            posisia=i
        } else if(num[i] === 'b'){
            posisib=i
        }
        if(Math.abs(posisia-posisib) === 4){
            return true
        }
    }
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  console.log(checkAB('bacon and bmeat')); // true
  
  