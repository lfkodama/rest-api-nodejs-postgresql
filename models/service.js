const fs = require('fs');
const path = require('path');

const services = [];

module.exports = class Service {
    constructor(t) {
        this.title = t;
    }

    save() {
        const s = path.join(path.dirname(process.mainModule.filename), 'data', 'services.json');

        fs.readFile(s, (err, fileContent) => {
            let services = [];
            if(!err) {
                services = JSON.parse(fileContent);
            }
            services.push(this);
            fs.writeFile(s, JSON.stringify(services), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        const s = path.join(path.dirname(process.mainModule.filename), 'data', 'services.json');
        fs.readFile(s, (err, fileContent) => {
            if(err) {
                callback([]);
            }
            callback(JSON.parse(fileContent));
        });
    }
}