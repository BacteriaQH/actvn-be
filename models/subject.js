'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Subjects extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Subjects.init(
        {
            code: DataTypes.STRING,
            name: DataTypes.STRING,
            department: DataTypes.STRING,
            all: DataTypes.INTEGER,
            theory: DataTypes.INTEGER,
            practice: DataTypes.INTEGER,
            exercise: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Subjects',
        },
    );
    return Subjects;
};
