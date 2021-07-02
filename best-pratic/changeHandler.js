let coins = {
    'p': 1,
    'n':5,
    'd':10,
    'q':25
};

let coin_order = ['q','d','n','p']
module.exports = {
  
    getAmount: function(coinType) {
        // COINS:
        // [p]enny
        // [n]ickel
        // [d]ime
        // [q]uarter
        
        if(!coins.hasOwnProperty(coinType)){

            throw new Error('Unrecognized coin ' + coinType);

        }
        
        return coins[coinType];
       
      },
      convertToChange: function(monete){
          var change = [];
          for(var i in coin_order){
              let coinType= coin_order[i];
              let value = coins[coinType];

              while(monete>=value){
                  change.push(coinType);
                  monete -=value;
              }
          }
          return change;
      }
};