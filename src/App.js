import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyCiDnKxgM8RWJXbH_J8KwLdyyVFGPRWyM0",
   authDomain: "chat-app-83cb0.firebaseapp.com",
   databaseURL: "https://chat-app-83cb0.firebaseio.com",
   projectId: "chat-app-83cb0",
   storageBucket: "chat-app-83cb0.appspot.com",
   messagingSenderId: "348168923462",
   appId: "1:348168923462:web:0da734a4a35a4df2d05d47"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeRoom: '',
      user: null,
    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setActiveRoom(room) {

    this.setState({
      activeRoom: room
    });

  }

  setUser(user) {
    this.setState({
      user:user
    });
  }

  formatTime(timestamp) {
    // Converts the seconds given by UNIX timestamp to milliseconds for Date object
    let date = new Date (timestamp);
    let fTime = date.toLocaleTimeString('en-US');
    return fTime;
  }

  render() {
    return (
      <div>
        <User
        firebase={firebase}
        setUser={this.setUser}
        user={this.state.user}
        />
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
            <RoomList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            setActiveRoom={this.setActiveRoom}
            />
            <MessageList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            user={this.state.user}
            formatTime={this.formatTime}
            />
        </div>
      </div>
    );
  }
}

export default App;
