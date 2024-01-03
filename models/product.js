const db = require('../util/database');

const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    
  }


  static deleteById(id) {
    
  }

    // static pois aí não faz fetch para cada objeto instanciado (a cada "new Product()"), somente para a classe produto
    static fetchAll() { 
      return db.execute('SELECT * FROM products');
    }
}