function cariModus(arr) {

    var index = 0;
    var greatestFrequency = 0;
    var frequency2 = 0;
    
  
    for(var i = 0; i < arr.length; i ++) {
      var frequency = 0;
      for(var j = 0; j < arr.length; j ++) { 
        if(arr[i] === arr[j] && i !== j) {
          frequency ++;
          frequency2 ++;
          // console.log(arr[i]+ '-' + arr[j]);
          // console.log(frequency)
          if(frequency > greatestFrequency) {
            greatestFrequency = frequency;
            index = i;
            // console.log(greatestFrequency)
            // console.log(index)
          }
        }
      }
    }
    
      
    if(greatestFrequency === 0) {
      return -1;
    }
      
    if(frequency2 === ((arr.length-1)*arr.length)) {
      return -1
    }
    
    return arr[index];
  }
    
  
    
    // TEST CASES
    console.log(cariModus([5, 5, 10, 4, 5, 2, 4])); // 5
    console.log(cariModus([5, 10, 10, 6, 5, 6, 6])); // 6
    console.log(cariModus([10, 4, 5, 2, 4])); // 4
    console.log(cariModus([5, 10, 10, 6, 5])); // 5
    console.log(cariModus([10, 3, 1, 2, 5])); // -1
    console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
    console.log(cariModus([7, 7, 7, 7, 7])); // -1