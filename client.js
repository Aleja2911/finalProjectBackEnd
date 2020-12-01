const { Pool, Client } = require('pg');

const pool = new Pool()

const client = new Client({

    connectionString: process.env.DATABASE_URL,
    ssl: {
    rejectUnauthorized: false
    }
})

client.connect();
module.exports = {
        query: (text, params, callback) => {
        return pool.query(text, params, callback)
        },
    }

module.exports = client;






