var Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
// const { handlebars } = require('hbs');

var helpers = require('handlebars-helpers')({
    handlebars: Handlebars

});
const moment = require('moment');

let customHelper = {
    debug(value) {
        console.log(value)
    },

    formatCurrency(price) {
    return '$' + parseFloat(price).toFixed(2);
},
      formatDate(date) {
        return moment(date).format('DD/MM/YY');
    },
    multiply(a,b){
        return a * b;
    }
}


module.exports = {
    defaultLayout: 'default',
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: {
        ...helpers,
        ...customHelper
    }
}

