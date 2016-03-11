var Sequelize = require('sequelize');

var connection = new Sequelize('articles', 'root', 'root');

var Article = connection.define('article', {
        title: {
            type:      Sequelize.STRING,
            unique:    true,
            allowNull: false
        },
        body:  {
            type:         Sequelize.TEXT,
            // defaultValue: 'Coming soon...'
        }
    },
    {
        timestamps: false // Aditional options for the model
        // , freezeTableName: true // Prevents table name to be pluralized ig. Article -> Articles
    });

connection.sync({
    force:   true,
    logging: console.log
}).then(function() {

});
