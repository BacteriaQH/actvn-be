'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Classrooms extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Classrooms.init(
        {
            code: DataTypes.STRING,
            name: DataTypes.STRING,
            subject_id: DataTypes.STRING,
            teacher_id: DataTypes.STRING,
            semester_id: DataTypes.STRING,
            course_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Classrooms',
        },
    );
    return Classrooms;
};
