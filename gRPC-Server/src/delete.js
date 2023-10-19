const pool = require('../dbConnection');

async function del(call, callback) 
{
  const query = `delete from producto where id = $1`
  try {
  await pool.query(query, [call.request.id])
  callback(null, { message: 'Borrado correctamente'});
  } catch (error) {
    callback(error);
  }
}

module.exports = del