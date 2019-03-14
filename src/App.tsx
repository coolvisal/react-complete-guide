import * as React from 'react';
import './App.css';
import Input from './Users/UserInput';
import Output from './Users/UserOutput';

class App extends React.Component {
  // public state={
  //   otherState:'This is other State',
  //   person:[
  //     {name:'Visal', age:27},
  //     {name:'Kashif', age:26}
  //   ]
  // }
   
  // public switchNameHandler=()=>{
  //   this.setState= (event) => ({person:[
  //     {name:'Visal Ahmad', age:28},
  //     {name:'Kashif', age:26}     
  //     ]
  //   })
  // }

  public state={
    userName:null
  }
  public SetUserName= (event:any) => {
    this.setState(
      {userName:event.target.value}
    )}

  public render() {
    return (
      <div className="App">

      <Input changed={this.SetUserName} />
      <Output userName={this.state.userName}/>
       {/* <h1>Hi, I am react app.</h1>
       <button onClick={this.switchNameHandler}>Update Name</button>
       <Person name={this.state.person[0].name} age={this.state.person[0].age} otherState={this.state.otherState}>This is Visal</Person>
       <Person name={this.state.person[1].name} age={this.state.person[1].age} otherState={this.state.otherState}>This is Visal</Person> */}
      </div>
    );
  }
}

export default App;
