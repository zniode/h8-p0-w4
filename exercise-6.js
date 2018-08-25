function hitungHuruf(kata) {
	var splitWord = kata.split(' ')
	var mostRecurringLetter = []
  // console.log(splitWord)
	for(var i = 0; i < splitWord .length; i++){
		var inputLetter = []
		var countLetter = []
		var recurringLetter = 0
		for(var j = 0; j < splitWord[i].length; j++){
			if(inputLetter.indexOf(splitWord[i][j]) === -1){
				inputLetter.push(splitWord[i][j]);
				countLetter.push(1)
			} else {
				var place = inputLetter.indexOf(splitWord[i][j])
				countLetter[place]++
			}
		}
    // console.log(inputLetter)
    // console.log(countLetter)
    // console.log(countLetter[place])
		
		for(var k = 0; k < countLetter.length; k++){
			if (countLetter[k] !== 1){
				recurringLetter += countLetter[k];
			}
		}
    // console.log(recurringLetter)
		mostRecurringLetter.push(recurringLetter)
	}
    // console.log(mostRecurringLetter)

	var total = 0;
	for(var l = 0; l < mostRecurringLetter.length; l++){
		if(mostRecurringLetter[l] > total){
			total = mostRecurringLetter[l];
		}
	}
	return splitWord[mostRecurringLetter.indexOf(total)]
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a developer passionate')); // passionate
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau