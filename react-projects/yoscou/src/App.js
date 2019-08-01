import React, { Component } from 'react';
import ChatForm from './ChatForm';
import Video from './Video';
import PropTypes from 'prop-types'

export default class App extends Component{

  static defaultProps = {
    paramVideo: [
      {action: "Start Video Call", videoId: "localVideo", id: 1}, 
      {action: "Receive Video Call", videoId: "remoteVideo", id: 2},
      {action: "End Video Call", videoId: "remoteVideo", id: 3}
    ]
  }

  static propTypes = {
    paramVideo: PropTypes.arrayOf(
      PropTypes.shape({
        action: PropTypes.string.isRequired,
        videoId: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
    ).isRequired 
  }

  startVideoCall(id){
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
      let localVideo = document.getElementById(id);
      localVideo.srcObject = stream;
    }).catch((error) => { console.log(`error: {error} occure`);});
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          { 
            this.props.paramVideo.map((param) => param.id !== 3? 
              (  
                <div className="col" key={param.id}>
                  <Video videoId={param.videoId} action={param.action} onClick={this.startVideoCall}/>
                </div>
              ):(<p key={param.id}>cannot display that element</p>)
            )
          }
        </div>  
        <div className="row">
          <div className="col">
            <ChatForm/>
          </div>
          <div className="col">
            <ChatForm/>
          </div>
        </div>  
      </div>
    );
  }
}