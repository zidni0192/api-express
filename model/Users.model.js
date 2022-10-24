import {Sequelize} from "sequelize";

import db from "../configs/Database.js";

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