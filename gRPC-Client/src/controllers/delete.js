const client = require("../../gRPC_cli");



function del (req, res) {
const id = req.body.id


client.del({ id: id }, function (err, response) {
    
res.status(200).json({message: response.message})

});
}
module.exports = del