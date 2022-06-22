class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateItemQuality() {

    this.sellIn -= 1


    if (this.sellIn < 0) {

    this.quality -= 2
    }

    else this.quality -= 1


    if (this.quality <= 0) {

      this.quality = 0
      }
  }

}

class Uncommon extends Item {

}

class Cheese extends Item {

  updateItemQuality() {

    this.sellIn -= 1

    if (this.quality === 50) {

      this.quality = 50
      }

    else this.quality += 1
  }
  
}

class Legendary extends Item {

  updateItemQuality() {

    this.sellIn = this.sellIn

    this.quality = this.quality
  }
  
}

class BackstagePass extends Item {

  updateItemQuality() {

    this.sellIn -= 1


    if (this.sellIn < 0) {

      this.quality = 0
    }

    else if (this.sellIn <= 4) {

      this.quality += 3
    }

    else if (this.sellIn <= 9) {

      this.quality += 2
    }
    
    else this.quality += 1

    if (this.quality >= 50) {

      this.quality = 50
    }
  }
  
}

class Conjured extends Item {

  updateItemQuality() {

    this.sellIn -= 1


    if (this.sellIn < 0) {

    this.quality -= 4
    }

    else this.quality -= 2


    if (this.quality <= 0) {

      this.quality = 0
      }
  }
  
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {

    for (let i = 0; i < this.items.length; i++) {

      this.items[i].updateItemQuality()
    }

    return this.items
  }


  // updateQuality() {
  //   for (var i = 0; i < this.items.length; i++) {
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.items[i].quality = this.items[i].quality - 1;
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1;
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1;
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }
}
module.exports = {
  Item,
  Shop,
  Uncommon, 
  Cheese, 
  Legendary, 
  BackstagePass, 
  Conjured
}
