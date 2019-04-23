const validator = require('validator');
const isEmpty = require('./isEmpty');
module.exports = function validateRegisterInput(data){
  const error = {};
  data.email = !isEmpty(data.email)?data.email:'';
  data.password = !isEmpty(data.password)?data.password:'';
  data.userName = !isEmpty(data.userName)?data.userName:'';
  data.phoneNo = !isEmpty(data.phoneNo)?data.phoneNo:'';
  if(!validator.isEmail(data.email)){
    error.email = 'email is not valid'
  }
  if(!validator.isLength(data.password,{min:6,max:30})){
    error.password = 'password must be atleast 6 character'
  }
  if(!validator.isLength(data.phoneNo,{min:10,max:10})){
    error.phoneNo = 'phoneNo must be 10 digits'
  }
  if(validator.isEmpty(data.email)){
    error.email = 'email is required'
  }
  if(validator.isEmpty(data.userName)){
    error.userName = 'userName is required'
  }
  if(validator.isEmpty(data.phoneNo)){
    error.phoneNo = 'phoneNo is required'
  }
  if(validator.isEmpty(data.password)){
    error.password = 'password is required'
  }
  return {
    error,
    isValid : isEmpty(error)
  }
}
