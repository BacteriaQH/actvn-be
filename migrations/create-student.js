'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Students', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                unique: true,
            },
            code: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.BOOLEAN,
            },
            image: {
                type: Sequelize.STRING,
            },
            class: {
                type: Sequelize.STRING,
            },
            bank_number: {
                type: Sequelize.STRING,
            },
            bank: {
                type: Sequelize.STRING,
            },

            school_year_id: {
                type: Sequelize.STRING,
            },
            dob: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            identify_number: {
                type: Sequelize.STRING,
            },
            identify_date: {
                type: Sequelize.STRING,
            },
            identify_address: {
                type: Sequelize.STRING,
            },
            province: {
                type: Sequelize.STRING,
            },
            district: {
                type: Sequelize.STRING,
            },
            ward: {
                type: Sequelize.STRING,
            },
            nationality: {
                type: Sequelize.STRING,
                default: 'Việt Nam',
            },
            ethnic: {
                type: Sequelize.STRING,
                default: 'Kinh',
            },
            religion: {
                type: Sequelize.STRING,
                default: 'Không',
            },
            wish: {
                type: Sequelize.STRING,
            },
            graduation_year: {
                type: Sequelize.STRING,
            },
            family: {
                type: Sequelize.STRING,
            },
            training_object: {
                type: Sequelize.STRING,
            },
            affiliates: {
                type: Sequelize.STRING,
            },
            personal_phone: {
                type: Sequelize.STRING,
            },
            family_phone: {
                type: Sequelize.STRING,
            },
            office_phone: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            news_to_person: {
                type: Sequelize.STRING,
            },
            news_to_address: {
                type: Sequelize.STRING,
            },
            date_join_army: {
                type: Sequelize.STRING,
            },
            level: {
                type: Sequelize.STRING,
            },
            cultural_level: {
                type: Sequelize.STRING,
            },
            unit: {
                type: Sequelize.STRING,
            },
            salary_type: {
                type: Sequelize.STRING,
            },
            salary_group: {
                type: Sequelize.STRING,
            },
            salary_level: {
                type: Sequelize.STRING,
            },
            salary_factor: {
                type: Sequelize.STRING,
            },
            salary_date: {
                type: Sequelize.STRING,
            },
            service: {
                type: Sequelize.STRING,
            },
            health: {
                type: Sequelize.STRING,
            },
            date_join_union: {
                type: Sequelize.STRING,
            },
            date_join_party: {
                type: Sequelize.STRING,
            },
            entry_date: {
                type: Sequelize.STRING,
            },
            graduation_date: {
                type: Sequelize.STRING,
            },
            job: {
                type: Sequelize.STRING,
            },
            laudatory: {
                type: Sequelize.STRING,
            },
            discipline: {
                type: Sequelize.STRING,
            },
            discipline: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Students');
    },
};
