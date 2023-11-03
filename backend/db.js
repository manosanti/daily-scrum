import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '969565609lulu',
    database: 'dailyflow'
});