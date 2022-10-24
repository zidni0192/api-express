import {Sequelize} from "sequelize";

import db from "../configs/database.js";

const {DataTypes} = Sequelize;

const Users = db.define('m_users', {
    username: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Users;