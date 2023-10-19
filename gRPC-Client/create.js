const client = require("./gRPC_cli");


client.create({ descrip: 'dorito' }, function (err, response) {console.log('Message:', response.message);});
