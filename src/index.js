import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
function  App(){
  return(
    <div className='App'>
      我是爸爸
      <Son1 name="  大儿子你好！"/>
      <Son2 name="  小儿子你好！"/>
    </div>
  )
}
/* 函数组件 */
function Son1(props){
  const [n,setN]=React.useState(0)
  return (
    <div className='Son1'>
      我是大儿子，爸爸对我说:{props.name}，n:{n}
      <button onClick={()=>setN(n+1)}>+1</button>
    </div>
  )
}
/*类组件  */
class Son2 extends React.Component{
  constructor(){
    super()
    this.state={ n:0 }
  }
  add() {
    this.setState({n:this.state.n+1})
  }
  render(){
    return (
      <div className='Son2'>
        我是小儿子，爸爸对我说:{this.props.name}，n:{this.state.n}
        <button onClick={()=>this.add()}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));