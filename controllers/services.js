const Service = require('../models/service');

exports.getAddService = (req, res, next) => {
    res.render('add-service', {
        pageTitle: 'Add Service',
        path: '/admin/add-service',
        formCSS: true,
        serviceCSS: true,
        activeAddService: true
    });
};

exports.postAddService = (req, res, next) => {
    const service = new Service(req.body.title);
    service.save();
    res.redirect('/shop-services');
};

exports.getServices = (req, res, next) => {
    const services = Service.fetchAll(services => {
        res.render('shop-services', {
            servs: services,
            pageTitle: 'Shop Services',
            path: '/shop-services',
            hasServices: services.length > 0,
            activeShop: true,
            serviceCSS: true
        });
    });
};