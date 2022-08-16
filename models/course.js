'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Courses extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Courses.init(
        {
            code: DataTypes.STRING,
            department_id: DataTypes.STRING,
            semester_id: DataTypes.STRING,
            start_year: DataTypes.STRING,
            end_year: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Courses',
        },
    );
    return Courses;
};
