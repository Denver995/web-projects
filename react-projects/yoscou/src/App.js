import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ChatForm from './ChatForm';
import Video from './Video';

export default class App extends Component{
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <Video videoId="emiter"/>
          </div>
          <div className="col"></div>
        </div>  
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <ChatForm/>
          </div>
          <div className="col"></div>
        </div>  
      </div>
    )
  }
}