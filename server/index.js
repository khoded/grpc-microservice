const grpc = require('grpc');
global.Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/grpc');

const proto = grpc.load('proto/employees.proto');
const server = new grpc.Server();
const employeeServices = require('../db/employee')

server.addService(proto.employees.EmployeesService.service, {

   List(call, callback){
      employeeServices.list(callback);
   },

   Get(call, callback){
     console.log(call.request.employee_id)
      let payload = {
         criteria: {
            employee_id: call.request.employee_id
         },
         projections: {
            _id: 0, __v: 0
         },
         options: {
            lean: true
         }
      };
      let emp = new employeeServices(payload);
      emp.fetch(callback);
   },

   Insert(call, callback){
      let emp = new employeeServices({
         employee_id: call.request.employee_id,
         name: call.request.name,
         email: call.request.email,
      });
      emp.add(callback);
   },

   Remove(call, callback){
      const criteria = {
         employee_id: call.request.employee_id,
      };
      let emp = new employeeServices(criteria);
      emp.remove(callback);
   },
});


server.bind('0.0.0.0:5050', grpc.ServerCredentials.createInsecure());

server.start();
console.log('grpc server running on port:', '0.0.0.0:5050');