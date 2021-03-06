import React,{Component} from 'react'
import axios from 'axios'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
class UpdateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName:'',
      password:'',
      email:'',
      phoneNo:'',
      error:[],
      message:null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  componentDidMount(){
    axios.get(`/api/user/${this.props.match.params.email}`).then(res=>{
      this.setState({
        userName:res.data.user.userName,
        email:res.data.user.emailId,
        password:res.data.user.password,
        phoneNo:res.data.user.phoneNo
      })
    }).catch(err=>{
      console.log("eeeee",err);
    })
  }
  onSubmit(e){
    e.preventDefault();
    const newUser={
      userName:this.state.userName,password:this.state.password,email:this.state.email,phoneNo:this.state.phoneNo
    }
    axios.post(`/api/update/${this.props.match.params.email}`,newUser)
    .then(res=>{
        this.setState({
          message:res.data.message
        })
        if(this.state.message==="such user is not present"){

        }else
          setTimeout(()=>{this.props.history.push('/all')},3000);
    })
    .catch(err=>{
      this.setState({
        error:err.response.data
      })
    });
  }

  render(){
    const {error} = this.state;
    return(
      <div className="Form">
        <div className="container">
          {this.state.message?<div className="alert alert-success" role="alert">
            <strong>{this.state.message}!!</strong>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>:""}
          <div className="row">
            <div className="col-md-8 m-auto">
              <br/>
              <br/>
              <h4 className="display-4 text-center">Update Details</h4>
              <small className="from-text text-muted">*required fields</small>
              <form onSubmit={this.onSubmit} className="form-group">
                <InputFieldTextGroup name="userName" placeholder="enter name" value={this.state.userName} onChange={this.onChange} error={error.userName} />
                <InputFieldTextGroup name="email" placeholder="enter email" value={this.state.email} onChange={this.onChange} error={error.email} />
                <InputFieldTextGroup name="password" placeholder="enter password" value={this.state.password} onChange={this.onChange} error={error.password} />
                <InputFieldTextGroup name="phoneNo" placeholder="enter phoneNo" value={this.state.phoneNo} onChange={this.onChange} error={error.phoneNo} />
                <button type="submit" className="btn btn-info btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateForm;
//export default connect(null,{})(StudentFcaste
