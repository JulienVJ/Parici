// exporte table with all field
module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        // name of table
        "circuit", {
            // field name
            id_circuit: {
                //set data type with out max length
                type: Sequelize.DataTypes.INTEGER,
                // set primaryKey = true
                primaryKey: true,
                // set autoIncrement = true
                autoIncrement: true
            },
            name_circuit: {
                //set data type with max length
                type: Sequelize.DataTypes.STRING(255),
                // setting allowNull to false will add NOT NULL to the column, which means an error will be if you add info in this column
                allowNull: false
            },
            description_circuit: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true
            },
            arrondissement: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false
            },
            image_circuit: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true
            },

        }, {
            /**
             * By default, Sequelize will add the attributes createdAt and updatedAt to your model so you will be able to know when the database entry went into the db and when it was updated last.
             */
            timestamps: true,
            /**
             * Sequelize allow setting underscored option for Model. When true this option will set the field option on all attributes to the underscored version of its name.
             * This also applies to foreign keys generated by associations.
             * */

            underscored: true,
        }
    );
};