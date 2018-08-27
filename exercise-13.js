function countProfit(shoppers) {
    var itemList = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    
    var newArray = [];  
    
  
    var shoesStock = itemList[0][2];
    var shirtStock = itemList[1][2];
    var sweaterStock = itemList[2][2];
    
    
    var shoesBuyers = [];
    var shirtBuyers = [];
    var sweaterBuyers = [];
    
    for(var i = 0; i < shoppers.length; i++){
      if(shoppers[i].product === 'Sepatu Stacattu'){
        if(shoesStock >= shoppers[i].amount){
          shoesBuyers.push(shoppers[i].name);
          shoesStock -= shoppers[i].amount;
        }
      } else if(shoppers[i].product === 'Baju Zoro'){
        if(shirtStock >= shoppers[i].amount){
          shirtBuyers.push(shoppers[i].name);
          shirtStock -= shoppers[i].amount;
        }
      } else if(shoppers[i].product === 'Sweater Uniklooh'){
        if(sweaterStock >= shoppers[i].amount){
          sweaterBuyers.push(shoppers[i].name);
          sweaterStock -= shoppers[i].amount;
        }
      }
    }
    
    
    var buyers;
    var inventory;
    
    for(var l = 0; l < itemList.length; l++){
      if(itemList[l][0] === 'Sepatu Stacattu'){
        buyers = shoesBuyers;
        inventory = shoesStock;
        totalProfit = (itemList[l][2]- shoesStock) * itemList[l][1];
      } else if(itemList[l][0] === 'Baju Zoro'){
        buyers = shirtBuyers;
        inventory = shirtStock;
        totalProfit = (itemList[l][2] - shirtStock) * itemList[l][1];
      } else if(itemList[l][0] === 'Sweater Uniklooh'){
        buyers = sweaterBuyers;
        inventory = sweaterStock;
        totalProfit = (itemList[l][2] - sweaterStock) * itemList[l][1];
      }
      
      
      var objectProduct = {};
      objectProduct.product = itemList[l][0];
      objectProduct.shoppers = buyers;
      objectProduct.leftOver = inventory;
      objectProduct.totalProfit = totalProfit;
      newArray.push(objectProduct);
    }
  
    return newArray;
    
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]