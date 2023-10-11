import mysql2 from "mysql2";
import { Sequelize } from "sequelize";

export const db = new Sequelize(
    'test',
    'root',
    '1963',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        dialectModule: mysql2
    }
)
// console.log(db)