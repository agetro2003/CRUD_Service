const client = require("./gRPC_cli");
const rows = []
const call = client.read();

call.on ('data', function(data) {
    rows.push(data)
});

call.on('end', function() {
    console.log(rows)
})

call.on('error', function(e) {
    console.log('Error al obtener la data',e);
});