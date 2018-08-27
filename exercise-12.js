function shoppingTime(memberId, money) {
    var change = money;
    var shoppingCart = [];
    
    for(var i=0; i<5; i++){
      if(change >= 1500000){
        shoppingCart.push('Sepatu Stacattu');
        change -= 1500000;
      } else if(change >= 500000){
        shoppingCart.push('Baju Zoro');
        change -= 500000;
      } else if(change >= 250000){
        shoppingCart.push('Baju H&N');
        change -= 250000;
      } else if(change >= 175000){
        shoppingCart.push('Sweater Uniklooh');
        change -= 175000;
      } else if(change >= 50000){
        shoppingCart.push('CasingHandphone');
        change -= 50000;
        break;
      }
    }
    // console.log(shoppingCart);
    // console.log('Sisa Uang : ' + change);
    
    var objProduct = {};
    objProduct.memberId = memberId;
    objProduct.money = money;
    objProduct.listPurchased = shoppingCart;
    objProduct.changeMoney = change;
    // objProduct.
    
    if(memberId === '' || memberId === undefined && money === undefined){
      return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if(money < 50000){
      return 'Mohon maaf, uang tidak cukup';
    }
    return objProduct;
    
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja