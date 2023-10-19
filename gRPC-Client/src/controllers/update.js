const client = require("../../gRPC_cli");

function update (req, res) {
    const data = {
        id: req.body.id,
        descrip: req.body.descrip,
    }
    client.update(data, function (err, response)   {
    res.status(200).json({message: response.message})
});

}

module.exports = update