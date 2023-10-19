const client = require("./gRPC_cli");


client.update({ descrip: 'tequeño', id: 1 }, function (err, response) {console.log('Message:', response.message);});
