const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
                    'data',
                    'products.json'
        );

const getProductsFromFile = callback => {
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                return callback([]);
            }
            callback(JSON.parse(fileContent));
        }); 
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile(products => {
            fs.readFile(p, (err, fileContent) => {
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            });
        });
        const p = path.join(path.dirname(process.mainModule.filename),
                  'data',
                  'products.json'
        );

        
    }

    // static pois aí não faz fetch para cada objeto instanciado (a cada "new Product()"), somente para a classe produto
    static fetchAll(callback) { 
        getProductsFromFile(callback);
    }
}