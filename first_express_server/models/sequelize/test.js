import { DataTypes } from "sequelize";
import { db } from "./db.js";

export const Test = db.define('test', {
    pseudo: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
})

// db.sync({ alter: true })