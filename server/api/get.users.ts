import mysql from 'mysql2/promise'
import bluebird from 'bluebird'

export default defineEventHandler(async (event) => {
    const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'user',
    database: 'user_db',
    Promise: bluebird,
})

const [rows, fields] = await connection.execute(
    "SELECT id, email, first_name, last_name, password_hash, created_at FROM user_db" )

    return {
        user: rows
    }
});