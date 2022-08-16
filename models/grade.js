'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Grades extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Grades.init(
        {
            student_id: DataTypes.STRING,
            class: DataTypes.STRING,
            subject_id: DataTypes.STRING,
            grade1: DataTypes.FLOAT,
            grade2: DataTypes.FLOAT,
            exam1: DataTypes.FLOAT,
            average1: DataTypes.FLOAT,
            letter1: DataTypes.STRING,
            exam2: DataTypes.FLOAT,
            average2: DataTypes.FLOAT,
            letter2: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Grades',
        },
    );
    return Grades;
};
