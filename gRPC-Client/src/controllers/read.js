const client = require("../../gRPC_cli");

function read (req, res) {
    const rows = []
const call = client.read();

call.on ('data', function(data) {
    rows.push(data)
});

call.on('end', function() {
    res.status(200).json({data: rows});
})

call.on('error', function(e) {
    console.log('Error al obtener la data',e);
});
}

module.exports = read