'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Students extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Students.init(
        {
            code: DataTypes.STRING,
            name: DataTypes.STRING,
            gender: DataTypes.BOOLEAN,
            image: DataTypes.STRING,
            class: DataTypes.STRING,
            bank_number: DataTypes.STRING,
            bank: DataTypes.STRING,
            school_year_id: DataTypes.STRING,
            dob: DataTypes.STRING,
            address: DataTypes.STRING,
            identify_number: DataTypes.STRING,
            identify_date: DataTypes.STRING,
            identify_address: DataTypes.STRING,
            province: DataTypes.STRING,
            district: DataTypes.STRING,
            ward: DataTypes.STRING,
            nationality: DataTypes.STRING,
            ethnic: DataTypes.STRING,
            religion: DataTypes.STRING,
            wish: DataTypes.STRING,
            graduation_year: DataTypes.STRING,
            family: DataTypes.STRING,
            training_object: DataTypes.STRING,
            affiliates: DataTypes.STRING,
            personal_phone: DataTypes.STRING,
            family_phone: DataTypes.STRING,
            office_phone: DataTypes.STRING,
            email: DataTypes.STRING,
            news_to_person: DataTypes.STRING,
            news_to_address: DataTypes.STRING,
            date_join_army: DataTypes.STRING,
            level: DataTypes.STRING,
            cultural_level: DataTypes.STRING,
            unit: DataTypes.STRING,
            salary_type: DataTypes.STRING,
            salary_group: DataTypes.STRING,
            salary_level: DataTypes.STRING,
            salary_factor: DataTypes.STRING,
            salary_date: DataTypes.STRING,
            service: DataTypes.STRING,
            health: DataTypes.STRING,
            date_join_union: DataTypes.STRING,
            date_join_party: DataTypes.STRING,
            entry_date: DataTypes.STRING,
            graduation_date: DataTypes.STRING,
            job: DataTypes.STRING,
            laudatory: DataTypes.STRING,
            discipline: DataTypes.STRING,
            discipline: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Students',
        },
    );
    return Students;
};
