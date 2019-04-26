const validateRegister = require('../validator/register');
const db= require('../util/database');

exports.postRegister = (req, res, next) => {
  const {error,isValid} = validateRegister(req.body);
  console.log(error);
  if(!isValid){
    return res.status(400).json(error);
  }
  //req.body.email='gaurav.agarwala19
    db.execute('select * from userData where emailId= ?',[req.body.email])
      .then(([user]) => {
        console.log(user);
        if (user.length==0) {
          console.log("here");
          var t = new Date().toISOString().slice(0,19).replace('T',' ');
          return db.execute('insert into userData(userName,emailId,password,phoneNo,dateTime) values(?,?,?,?,?)' ,[req.body.userName, req.body.email,req.body.password,req.body.phoneNo,t])
          .then(([result]) => {
            res.json({message:"user is inserted"});
          })
          .catch(err => {
            console.log(err);
          });
        }else{
          return res.json({message:"email ID previously exists"});
        }
    }).catch(err=>{
      console.log(err);
      res.status(400).json({email:"some other error occurred"})
    });
};
exports.updateUser = (req, res, next) => {
  const {error,isValid} = validateRegister(req.body);
  console.log(error);
  if(!isValid){
    return res.status(400).json(error);
  }
  //req.body.email='gaurav.agarwala19
    db.execute('select * from userData where emailId= ?',[req.params.email])
      .then(([user]) => {
        console.log(user);
        if (user.length==0){
          res.json({message:"such user is not present"});
        }else{

          return db.execute('update userData set userName=?,password=?,phoneNo=? where emailId = ?' , [req.body.userName, req.body.password,req.body.phoneNo,req.body.email])
          .then(([result]) => {
            res.json({message:"user is updated"})
          })
          .catch(err => {
            console.log(err);
            res.status(400).json({err:"234567"});
          });
        }
    }).catch(err=>{
      console.log(err);
      res.status(400).json({email:"some other error occurred"})
    });
};
exports.all = (req, res, next)=>{
  db.execute('select * from userData')
    .then(([user]) => {
      if (user.length==0) {
          res.json({res:[]});
      }else{
        user.sort(function(a,b){
          return new Date(b.dateTime) - new Date(a.dateTime);
        });
        res.json({res:user})
      }
  }).catch(err=>{
    res.status(400).json({email:"some other error occurred"})
  });
}

exports.search = (req,res,next)=>{
  db.execute('select * from userData where emailId= ?',[req.params.email])
    .then(([user]) => {
      if (user.length==0) {
        return res.json({user:null});
      }else{
        return res.json({user:user[0]});
      }
  }).catch(err=>{
    res.status(400).json({email:"some other error occurred"});
  });
}

exports.delete = (req,res,next)=>{
  db.execute('delete from userData where emailId= ?',[req.params.email])
    .then(([resp]) => {
      if(resp.affectedRows==0){
        res.json({message:"no such user to delete"});
      }else{
        res.json({message:"user deleted"});
      }
    }).catch(err=>{
        res.status(400).json({email:"some other error occurred"});
  });
}
