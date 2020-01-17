module.exports = {
    getPrice: function getPrice(cart) {
        if (cart.itemName == "Appenzeller Kaufen"){
          cart.price=10;
        } 
        else if (cart.itemName == "Eier Kaufen") {
          cart.price=20;
        }
        else if (cart.itemName == "icedtea Kaufen") {
          cart.price=30;
        }
        else if (cart.itemName == "kalbsbratwürste Kaufen") {
          cart.price=40;
        }
        else if (cart.itemName == "krustenkranz Kaufen") {
          cart.price=50;
        }
        else if (cart.itemName == "nektarinen Kaufen") {
          cart.price=60;
        }
        else if (cart.itemName == "olivenöl Kaufen") {
          cart.price=70;
        }
        else if (cart.itemName == "senf Kaufen") {
          cart.price=80;
        }
        else if (cart.itemName == "tomaten Kaufen") {
          cart.price=80;
        }
        else if (cart.itemName == "vanile glace Kaufen") {
          cart.price=80;
        }
      }
    }