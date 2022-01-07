import React from 'react';
import ReactDOM from 'react-dom';

class App2 extends React.PureComponent{
  constructor(props){
    super(props);
    this.state={
      n:1
    }
  }
  onClick=()=>{
    this.setState(state=>({n:state.n+1}));
    this.setState(state=>({n:state.n-1}));

  }
  /*
  shouldComponentUpdate(nextProps,nextState){
    if(nextState.n===this.state.n){
      return false
    }else{
      return true
    }
  }
  */
  render(){ 
    console.log('render了一次')   
    return (
      <div className='App2'>App2
        <div>
          {this.state.n}
          <button onClick={this.onClick}>+1</button>
        </div>
      </div>
    )
  }
}
export default App2;
