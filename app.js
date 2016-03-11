var Sequelize = require('sequelize');

var connection = new Sequelize('articles', 'root', 'root');

var Article = connection.define('article', {
    title: {
        Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    body:  {
        Sequelize.TEXT,
        defaultValue: 'Coming soon...'
    }
});

connection.sync().then(function() {
    Article.findById(1).then(function(article) {
        console.log(article.dataValues)
    });

    Article.findAll().then(function(articles) {
        console.log('ARTICLES.LENGTH: ' + articles.length);
    });
});
