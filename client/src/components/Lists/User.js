import React,{Component} from 'react'
import axios from 'axios'
import  {Link} from 'react-router-dom'
class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName:'',
      email:'',
      phoneNo:'',
      password:'',
      loginDate:'',
      alert:false
    };
  }
  onUpdat(email){
    axios.post(`/api/update/${email}`).then((res)=>{
      if(res.data.message==="user deleted"){
          console.log("sdfsdf");
          axios.get('/api/all').then(res=>{
            this.setState({
              users:res.data.res,
              alert:true
            })
            setTimeout(()=>{
              this.setState({
                alert:false
              })
            },2000)
          });
      }
    })
  }
  onDelete(email){
    axios.post(`/api/delete/${email}`).then((res)=>{
      if(res.data.message==="user deleted"){
          console.log("sdfsdf");
          this.setState({
            users:res.data.res,
            alert:true
          })
          setTimeout(()=>{this.props.history.push('/all')},3000);
      }
    })
  }
  componentDidMount(){
    axios.get(`/api/user/${this.props.match.params.email}`).then(res=>{
      res=res.data.user;
      this.setState({
        userName:res.userName,
        email:res.emailId,
        password:res.password,
        phoneNo:res.phoneNo,
        loginDate:res.dateTime
      })
      console.log(this.state);
    }).catch(err=>{
      console.log("eeeee",err);
    })
  }
  render(){
    var d = new Date(this.state.loginDate);

    return (
      <div className="container">
        <br/>
        <br/>
          {this.state.alert?<div className="alert alert-success" role="alert" >
            <strong>Deleted</strong>
          </div> : ""}
        <h4 className="mb-4">User Details</h4>
        <table className="table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone number</th>
              <th>Login Date</th>
              <th></th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.userName}</td>
              <td>{this.state.email}</td>
              <td>{this.state.password}</td>
              <td>{this.state.phoneNo}</td>
              <td>{d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()}</td>
              <td><Link to={`/update/${this.state.email}`} className="btn btn-large" style={{backgroundColor:"rgb(255, 204, 0)",color:"white"}}>Update</Link></td>
              <td><button onClick={this.onDelete.bind(this,this.state.email)} className="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default User;
