'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('KmaClasses', {
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
            course_id: {
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
        await queryInterface.dropTable('KmaClasses');
    },
};
