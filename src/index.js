import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import tech from './tech';
import nontech from './nontech';

class AllEvents extends React.Component{

  constructor(props){
    super(props)
    this.state={
      currActive: 'Tech',
    }
  }

  render(){
    return <div>
      <header>EVENTS</header>
      <div className="container">
      <nav>
        <button className='navButton' onClick={()=>{this.setState({currActive: 'Tech'})}} id="1">Tech</button>
        <button className='navButton' onClick={()=>{this.setState({currActive: 'Non-Tech'})}} id='2'>Non-Tech</button>    
      </nav>
        <p>{this.display()}</p>
      </div>
      <div></div>
    </div>
  }

  display(){
    if(this.state.currActive==='Tech'){
      return<div className='list'>
      <div className='event'>
        <div className='logo'>Logo</div>
        <div className='title'>Just Coding</div>
        <div className='info'>Information about the Event</div>
        <div className='buttn'> <button>  Register  </button> <button>  Read More </button>  </div>
      </div>
      <div className='event'>
        <div className='logo'>Logo</div>
        <div className='title'>Bug Off</div>
        <div className='info'>Information about the Event</div>
        <div className='buttn'> <button>  Register  </button> <button>  Read More </button>  </div>
      </div>
      <div className='event'>
        <div className='logo'>Logo</div>
        <div className='title'>Recode it</div>
        <div className='info'>Information about the Event</div>
        <div className='buttn'> <button>  Register  </button> <button>  Read More </button>  </div>
      </div>
      <div className='event'>
        <div className='logo'>Logo</div>
        <div className='title'>Code Buddy</div>
        <div className='info'>Information about the Event</div>
        <div className='buttn'> <button>  Register  </button> <button>  Read More </button>  </div>
      </div>
      <div className='event'>
        <div className='logo'>Logo</div>
        <div className='title'>Event</div>
        <div className='info'>Information about the Event</div>
        <div className='buttn'> <button>  Register  </button> <button>  Read More </button>  </div>
      </div>
      </div>
    }
    else{
      document.getElementById('1').classList.remove('selected');
    };

    if(this.state.currActive==='Non-Tech'){
      return<div className='list'>
      <div className='event' id='EQ'>
        <div className='logo'>Logo</div>
        <div className='title'>Electro Quest</div>
        <div className='info'>Information about the Event</div>
        <div className='buttn'><button>Register</button><button>Read More</button></div>
      </div>
      <div className='event' id='DQ'>
        <div className='logo'>Logo</div>
        <div className='title'>Data Quest</div>
        <div className='info'>Information about the Event</div>
        <div className='buttn'><button>Register</button><button>Read More</button></div>
      </div>
      <div className='event'>
        <div className='logo'>Logo</div>
        <div className='title'>Fandom Quiz</div>
        <div className='info'>Information about the Event</div>
        <div className='buttn'><button onClick={console.log("FQ")}>Register</button><button>Read More</button></div>
      </div>
      <div className='event'>
        <div className='logo'>Logo</div>
        <div className='title'>Dextrous</div>
        <div className='info'>Information about the Event</div>
        <div className='buttn'><button>Register</button><button>Read More</button></div>
      </div>
      <div className='event'>
        <div className='logo'>Logo</div>
        <div className='title'>Insight</div>
        <div className='info'>Information about the Event</div>
        <div className='buttn'><button>Register</button><button>Read More</button></div>
      </div>
      </div>
    }
  }
}

ReactDOM.render(<AllEvents/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
