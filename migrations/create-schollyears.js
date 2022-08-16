'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Schoolyears', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                unique: true,
            },
            display_name: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            start: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            end: {
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
        await queryInterface.dropTable('Teachers');
    },
};
