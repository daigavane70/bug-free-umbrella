import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class AllEvents extends React.Component{

  constructor(props){
    super(props)
    
    this.state={
      view: 1
    }

    this.handleType=this.handleType.bind(this);
  }

  handleType=(e)=>{
    this.setState({view: e.target.id})
    this.display()
  }

  display(){
    console.log(this.state.view)

    if(this.view==1){
      return<div>
        Technical Events
      </div>
    }
    else{
      return<div>
        non Tech Events
      </div>
    }
  }
  render(){
    return <div>
      <header>EVENTS</header>
      <div className="container">
        <table className="container">
          <tr>
            <th onClick={this.handleType} id="1">Tech</th>
            <th onClick={this.handleType} id='2'>Non-Tech</th>
          </tr>
        </table>
        {this.display}
      </div>
    </div>
  }
}

ReactDOM.render(<AllEvents/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
