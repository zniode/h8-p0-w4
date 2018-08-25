function angkaPrima(angka) {
    if (angka <= 1) return false;
    if (angka === 2) return true;
    
    var sqrt = Math.sqrt(angka);
  
    for (var i = 2; i <= sqrt; i++) 
      if (angka % i === 0) return false;
    return true;
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
  console.log(angkaPrima(121)); // false
  console.log(angkaPrima(169)); // false
  