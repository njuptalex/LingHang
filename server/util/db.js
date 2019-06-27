const Sequelize = require('sequelize');

const sequelize = new Sequelize('linghang_db', 'root', 'alex5412', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
	charset: "utf8",
        dateStrings: true,
        typeCast(field, next) {
            // for reading from database
            if (field.type === "DATETIME") {
                return field.string();
            }
            return next();
        }
    },
     define: {
            'underscored': true,
            'charset':'utf8mb4'
        },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区

});

module.exports = {
    sequelize
}