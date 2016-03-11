var Sequelize = require('sequelize');

var connection = new Sequelize('articles', 'root', 'root');

var Article = connection.define('article', {
    slug: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        unique: true
    },
    body: {
        type: Sequelize.TEXT,
    }
}, {
    hooks: {
        beforeValidate: function() {
            console.log('beforeValidate');

        },
        afterValidate: function() {
            console.log('afterValidate');

        },
        beforeCreate: function() {
            console.log('beforeCreate');

        },
        afterCreate: function() {
            console.log('afterCreate');
        }
    }
});

connection.sync({
    force: true,
    logging: console.log
}).then(function() {
    return Article.create({
        title: 'Zoo',
        slug: 'Foo',
        body: 'Bar'
    });
}).catch(function(error) {
    console.log(error);
});
