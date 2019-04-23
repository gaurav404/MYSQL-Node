import React,{Component} from 'react'
import Block from '../common/block.js'
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className="Main" style={{marginBottom:"3rem"}}>
        <div className="container text-center bg-dark" style={{color:"white",borderRadius:"1rem"}}>
          <h2>Coral BlockChain</h2>
          <p className="text-center">Blockchain is a relatively new technology and has a lot of promise in its ability impact to society. Some predict it would be as revolutionary as the internet itself. Since the technology is very new, it provides a great learning opportunity but at the same time it is very challenging
            as few people have mastered it and learning resources are limited.</p>
          <Block/>
          <p style={{height:"30px"}}></p>
        </div>
      </div>
    )

  }
}
export default Main;
