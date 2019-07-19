let employeeModel = require('../models/employee')
let Employee = class {
   constructor(payload) {
      this.payload = payload;
   }

   static list(cb) {
      const criteria = {};
      const projections = {
         _id: 0,
         __v: 0
      };
      const options = {
         lean: true
      };
      employeeModel.find(criteria, projections, options, (err, resp) =>  {
        cb(err, resp);
      });
      
   }

   add(cb) {
      new employeeModel(this.payload).save((err, resp)=>{
          cb(null,{})
      });
      
   }

   fetch(cb) {
      const criteria = this.payload.criteria;
      const projections = this.payload.projections;
      const options = this.payload.options;
      employeeModel.find(criteria, projections, options, (err, resp)=>{
        cb(null, resp)
      });
   }

   remove(cb) {
      const criteria = this.payload;
      employeeModel.remove(criteria, (err, resp) => {
        cb(null, {})
      });
      
   }
};
module.exports = Employee;