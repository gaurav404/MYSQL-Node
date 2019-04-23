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
      loginDate:''
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
          });
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
        loginDate:res.dateTime,
      })
      console.log(this.state);
    }).catch(err=>{
      console.log("eeeee",err);
    })
  }
  render(){
    return (
      <div className="container">
        <br/>
        <br/>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.userName}</td>
              <td>{this.state.email}</td>
              <td>{this.state.password}</td>
              <td>{this.state.phoneNo}</td>
              <td>{this.state.loginDate}</td>
              <td><Link to={`/update/${this.state.email}`} className="btn btn-large" style={{backgroundColor:"rgb(255, 204, 0)",color:"white"}}>Update</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default User;
