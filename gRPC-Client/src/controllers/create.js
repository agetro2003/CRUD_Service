const client = require("../../gRPC_cli");


function create (req, res) {
    const descrip = req.body.descrip
    client.create({ descrip: descrip }, function (err, response) 
    {
    res.status(200).json({message: response.message})
});

}

module.exports = create