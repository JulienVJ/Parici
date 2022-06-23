// exporte table with all field
module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        // name of table
        "favori", {
            // field name
            id_favori: {
                //set data type with out max length
                type: Sequelize.DataTypes.INTEGER,
                // set primaryKey = true
                primaryKey: true,
                // set autoIncrement = true
                autoIncrement: true
            },

        },
    );
};