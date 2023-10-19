const pool = require('../dbConnection');

async function update(call, callback) 
{
  const query = `update producto set descrip = $1 where id = $2`
  try {
  await pool.query(query, [call.request.descrip, call.request.id])
  callback(null, { message: 'Actualizado correctamente'});
  } catch (error) {
    callback(error);
  }
}

module.exports = update