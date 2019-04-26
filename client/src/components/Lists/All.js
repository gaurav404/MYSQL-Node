import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class All extends Component {
  constructor(props){
    super(props);

    this.state = {
      users:[],
      alert:false,
      loading:true
    };
    this.setalert = this.setalert.bind(this);
  }
  onDelete(email){
    axios.post(`/api/delete/${email}`).then((res)=>{
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
  setalert(){
    this.setState({
      alert:false
    })
  }
  componentDidMount(){
    axios.get('/api/all').then(res=>{
      this.setState({
        users:res.data.res,
        loading:false
      })
    })
  }
  render(){
    const {users}=this.state
    const tabledata = users.map((aca,index)=>{
      var d = new Date(aca.dateTime);
      return (<tr key={aca.emailId}>
        <td>{index+1}</td>
        <td>{aca.userName}</td>
        <td>{aca.emailId}</td>
        <td>{aca.phoneNo}</td>
        <td>{d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()}</td>
        <td><button onClick={this.onDelete.bind(this,aca.emailId)} className="btn btn-danger">Delete</button></td>
      </tr>)
      }
    )
    return(
      <div className="container">
        {this.state.alert?<div className="alert alert-success" role="alert" >
          <strong>Deleted</strong>
        </div> : ""}
        <br/>
        <br/>
        <h4 className="">Users</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Index</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            {this.state.loading?<h3 style={{height:"200px"}}>Loading please wait.....</h3>:(users.length===0)?
            <div className="container mb-5 mt-5">
              <p className="mr-5" style={{display:"inline"}}>No Users to show</p>
            </div>:
            <tbody>
              {tabledata}
            </tbody>

          }
          <Link to='/form' className="btn btn-large btn-info" style={{backgroundColor:"#6666ff"}}>Add a User</Link>
          </table>

      </div>
    );
  }
};

export default All;
