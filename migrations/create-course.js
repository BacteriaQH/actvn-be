'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Courses', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                unique: true,
            },
            code: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            department_id: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            semester_id: {
                type: Sequelize.STRING,
            },
            start_year: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            end_year: {
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
        await queryInterface.dropTable('Courses');
    },
};
