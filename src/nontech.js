import React from 'react';
import ReactDOM from 'react-dom';
import './nontech.css';

function nontech(){
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

export default nontech();