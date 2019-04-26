import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      sear : '',
      alert: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

// OPTIMIZE:
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    axios.get(`/api/user/${this.state.sear}`).then(res=>{
      console.log("sdffdgds sdfgdf ",res.data);
      if(res.data.user){
        this.props.history.push(`/user/${res.data.user.emailId}`);
      }else{
        this.setState({
          alert:true
        })
        setTimeout(()=>{
          this.setState({
            alert:false
          })
        },2000)
      }
    })
  }
  render(){
    return(
      <div className="Nav">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
              <Link className="navbar-brand" to="/" style={{border:"2px solid white",borderRadius:"6px",padding:"3px" }}>Coral BlockChain</Link>
                <form onSubmit={this.onSubmit} className="navbar-form navbar-nav" style={{marginTop:"1%", marginLeft:"4%"}}>
                  <div className="form-group" >
                    <input type="text" name='sear' className="form-control" value={this.state.sear} onChange={this.onChange} style={{width:"500px"}} placeholder="search by email"/>
                  </div>
                  <button className="btn btn-primary btn-sm" type="submit" style={{height:"5%" ,marginLeft:"2%",backgroundColor:"rgb(255, 204, 0)",color:"white"}}>Search</button>
                </form>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav ml-auto">
                  <li>
                    <Link className="nav-link" to='/all'> AllUsers </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to='/form'> Insert </Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
        {this.state.alert?<div className="alert alert-success" role="alert" >
          <strong>Sorry no such email registered yet!! </strong>
        </div> : ""}
      </div>
    )

  }
}

export default Navbar;
