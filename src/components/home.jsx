import React from 'react'
import '../styling/home.scss'
import dcicon from '../assets/discord.png'
import flash from '../assets/flash.png'
import chat from '../assets/chat.png'
import plus from '../assets/plus.png'
import poop from '../assets/poop.png'
import setting from '../assets/setting.png'

const home = () => {
  <div className="wrapper">
    <div className="sideNav">
      <div className="topIcon">
        <button>
          <img src={dcicon} alt="logo-button" />
        </button>
      </div>
      <div className="midButtons">
        <button>
          <img src={plus} alt="logo-button" />
        </button>
        <button>
          <img src={chat} alt="logo-button" />
        </button>
        <button>
          <img src={flash} alt="logo-button" />
        </button>
        <button>
          <img src={poop} alt="logo-button" />
        </button>
      </div>
      <div className="lowerNav">
        <button>
          <img src={setting} alt="logo-button" />
        </button>
      </div>
    </div>
    <div className="chatList">
      <div className="title">
        <h1>Channels</h1> 
      </div>
      <div className="list">
        <div className="topics">

        </div>
        <div className="questions">

        </div>
        <div className="random">
          
        </div>
      </div>
    </div>
    <div className="chatWindow">
      
    </div>
  </div>
}

export default home