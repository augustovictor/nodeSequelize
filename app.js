var Sequelize = require('sequelize');

var connection = new Sequelize('articles', 'root', 'root');

var Article = connection.define('article', {
    slug: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: {
                args: [5, 150],
                msg: 'Please enter a title between 5 and 150 characters.'
            }
        }
    },
    body: {
        type: Sequelize.TEXT,
        // defaultValue: 'Coming soon...'
    }
}, {
    timestamps: false // Aditional options for the model
        // , freezeTableName: true // Prevents table name to be pluralized ig. Article -> Articles
});

connection.sync({
    force: true,
    logging: console.log
}).then(function() {
    return Article.create({
        title: 'Test',
        slug: 'wibble',
        body: 'zoofoobar'
    });
}).catch(function(error) {
    console.log(error);
});
