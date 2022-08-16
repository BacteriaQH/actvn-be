'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Semesters extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Semesters.init(
        {
            name: DataTypes.STRING,
            course_id: DataTypes.STRING,
            subject_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Semesters',
        },
    );
    return Semesters;
};
