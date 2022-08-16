'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Subjects', {
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
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            department: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            all: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            theory: {
                type: Sequelize.INTEGER,
            },
            practice: {
                type: Sequelize.INTEGER,
            },
            exercise: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('Subjects');
    },
};
