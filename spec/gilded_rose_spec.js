var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("item sellIn and quality degrades over time", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 10, 20) ]);
    const items = gildedRose.updateQuality();
    const result = [`${items[0].name}, ${items[0].sellIn}, ${items[0].quality}`]
    expect(result).toEqual([("+5 Dexterity Vest, 9, 19")]);
  });

  it("multiple items sellIn and quality degrades over time", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 10, 20), new Item("Elixir of the Mongoose", 5, 7) ]);
    const items = gildedRose.updateQuality();
    const result = []  
    items.forEach(item => result.push(`${item.name}, ${item.sellIn}, ${item.quality}`));
    expect(result).toEqual([("+5 Dexterity Vest, 9, 19"), ("Elixir of the Mongoose, 4, 6")]);
  });

  it("past sell by date quality degrades twice as fast", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 0, 10) ]);
    const items = gildedRose.updateQuality();
    const result = [`${items[0].name}, ${items[0].sellIn}, ${items[0].quality}`]
    expect(result).toEqual([("+5 Dexterity Vest, -1, 8")]);
  });

  it("item quality doesn't drop below 0", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 0, 0) ]);
    const items = gildedRose.updateQuality();
    const result = [`${items[0].name}, ${items[0].sellIn}, ${items[0].quality}`]
    expect(result).toEqual([("+5 Dexterity Vest, -1, 0")]);
  });

  it("aged brie quality increases over time", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    const items = gildedRose.updateQuality();
    const result = [`${items[0].name}, ${items[0].sellIn}, ${items[0].quality}`]
    expect(result).toEqual([("Aged Brie, 1, 1")]);
  });

  it("item quality doesn't increase over 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 50) ]);
    const items = gildedRose.updateQuality();
    const result = [`${items[0].name}, ${items[0].sellIn}, ${items[0].quality}`]
    expect(result).toEqual([("Aged Brie, 1, 50")]);
  });

  it("sulfuras quality doesn't change, sellIn date doesn't change", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    const items = gildedRose.updateQuality();
    const result = [`${items[0].name}, ${items[0].sellIn}, ${items[0].quality}`]
    expect(result).toEqual([("Sulfuras, Hand of Ragnaros, 0, 80")]);
  });

  it("backstage pass quality increases by 2 when there are 10 days or less before sell by date", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 45) ]);
    const items = gildedRose.updateQuality();
    const result = [`${items[0].name}, ${items[0].sellIn}, ${items[0].quality}`]
    expect(result).toEqual([("Backstage passes to a TAFKAL80ETC concert, 9, 47")]);
  });

    it("backstage pass quality increases by 3 when there are 5 days or less before sell by date", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 45) ]);
      const items = gildedRose.updateQuality();
      const result = [`${items[0].name}, ${items[0].sellIn}, ${items[0].quality}`]
      expect(result).toEqual([("Backstage passes to a TAFKAL80ETC concert, 4, 48")]);
    });

    it("backstage pass quality becomes 0 after sell by date", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 45) ]);
      const items = gildedRose.updateQuality();
      const result = [`${items[0].name}, ${items[0].sellIn}, ${items[0].quality}`]
      expect(result).toEqual([("Backstage passes to a TAFKAL80ETC concert, -1, 0")]);
    });

  // it("conjured items degrade in quality twice as fast", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });

});
