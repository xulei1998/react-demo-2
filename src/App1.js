import React from 'react';
import ReactDOM from 'react-dom';

class App1 extends React.Component{
  constructor(props){
    super(props);
    this.state={x:1}
  }
  onClick=()=>{
    this.setState({x:this.state.x+1})
  }
  render(){    //App1组件的state内部数据，作为外部数据传入子组件B
    return (
      <div className='App1'>
        App1
        <div>
          <B name={this.state.x} onClick={this.onClick} />  
        </div>
      </div>
    )
  }
}

class B extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps,nextContext){
    console.log('props变化了')
    console.log(this.props)  
    console.log(nextProps)
  }
  render(){
    return (
      <div>{this.props.name}
      <button onClick={this.props.onClick}>+1</button>
      </div>
    )
  }
}

export default App1;

