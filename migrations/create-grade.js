'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Grades', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                unique: true,
            },
            student_id: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            class: {
                type: Sequelize.STRING,
            },
            subject_id: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            grade1: {
                type: Sequelize.FLOAT,
            },
            grade2: {
                type: Sequelize.FLOAT,
            },
            exam1: {
                type: Sequelize.FLOAT,
            },
            average1: {
                type: Sequelize.FLOAT,
            },
            letter1: {
                type: Sequelize.STRING,
            },
            average2: {
                type: Sequelize.FLOAT,
            },
            exam2: {
                type: Sequelize.FLOAT,
            },
            letter2: {
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
        await queryInterface.dropTable('Grades');
    },
};
