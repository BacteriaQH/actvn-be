'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Teachers', {
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
            image: {
                type: Sequelize.STRING,
            },
            department: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            gender: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
            },
            phone: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            dob: {
                type: Sequelize.STRING,
            },
            email: {
                allowNull: false,
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
