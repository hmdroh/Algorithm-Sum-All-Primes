function sumPrimes(num) {
  

    var product = -1;
    for(var i = 1; i <=num; i++){
      var s = true;
      for(var j = 2; j<i; j++){
        if(i % j == 0){
          s = false;
        }
      }
      if(s){
       product +=i;
      }
    }
    console.log(product)
    return product;
  }
  
  sumPrimes(10);