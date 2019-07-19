const grpc = require('grpc');
const protoPath = require('path').join(__dirname, '../..', 'proto');
const proto = grpc.load({root: protoPath, file: 'employees.proto'});
const client = new proto.employees.EmployeesService('0.0.0.0:5050', grpc.credentials.createInsecure());





// client.Insert({
//    employee_id: parseInt(Math.random() * 1000000),
//    name: "Amulya Kashyap",
//    email: "amulyakashyap09@gmail.com"
// }, (error, response) => {
//    if (
//       !error
//    ) {
//       console.log("Response Inserted: ", response)
//    }
//    else {
//       console.log("Error:", error.message);
//    }
// });

// client.List({}, (error, response) => {
//    if (!error) {
//       console.log("Response : Listed", response)
//    }
//    else {
//       console.log("Error:", error.message);
//    }
// });
// client.Remove({
//    employee_id: 525725//parseInt(Math.random() * 1000000)
// }, (error, response) => {
//    if (
//       !error
//    ) {
//       console.log("Response : Removed", response)
//    }
//    else {
//       console.log("Error:", error.message);
//    }
// });
// 
// client.Get({
//    employee_id: 435279//parseInt(Math.random() * 1000000)
// }, (error, response) => {
//    if (!error) {
//       console.log("Response : Found", response)
//    }
//    else {
//       console.log("Error:", error.message);
//    }
// });
