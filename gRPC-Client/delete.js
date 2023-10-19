const client = require("./gRPC_cli");


client.del({ id: 1 }, function (err, response) {console.log('Message:', response.message);});
