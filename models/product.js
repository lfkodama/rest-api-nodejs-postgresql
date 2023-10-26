const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        products.push(this);
    }

    // static pois aí não faz fetch para cada objeto instanciado (a cada "new Product()"), somente para a classe produto
    static fetchAll() {  
        return products;
    }
}