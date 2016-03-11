var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');

var connection = new Sequelize('articles', 'root', 'root');

var User = connection.define('user', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    hooks: {
        afterValidate: function(user) {
            user.password = bcrypt.hashSync(user.password, 8);
        }
    }
});

connection.sync({
        force: true,
        logging: console.log
    })
    .then(function() {
        User.create({
            username: 'augustovictor',
            password: 'testing123'
        });
    })
    .catch(function(error) {
        console.log(error);
    });
