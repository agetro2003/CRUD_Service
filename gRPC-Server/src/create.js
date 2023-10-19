const pool = require('../dbConnection');

async function create(call, callback) 
{
  const query = `insert into producto (descrip) values ($1)`
  try {
  await pool.query(query, [call.request.descrip])
  callback(null, { message: 'Insertado correctamente'});
  } catch (error) {
    callback(error);
  }
}

module.exports = create