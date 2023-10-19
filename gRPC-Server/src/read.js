const pool = require("../dbConnection");

async function read (call){

const query = `SELECT * from producto;`;
try {
const data = await pool.query(query);

for (const row of data.rows){
    call.write(row)
}
call.end();
} catch (error) {
    console.log(error)
}
}

module.exports = read