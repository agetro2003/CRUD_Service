const PROTO_PATH = __dirname + '/../proto/demo.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const create = require('./src/create');
const read = require('./src/read');
const update = require('./src/update');
const del = require('./src/delete');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const demo_proto = grpc.loadPackageDefinition(packageDefinition).demo;
//Implements the SayWelcome RPC method.

//Starts an RPC server that receives requests for the Welcome service at the
const server = new grpc.Server();
server.addService(demo_proto.Crud.service, { 
  create: create,
  read: read,
  update: update,
  del: del,
});
server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {server.start();});
console.log('server activo');
