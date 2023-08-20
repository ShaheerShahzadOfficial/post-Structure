import React, { useState } from 'react'
import "./Messages.css"
import Users from './Components/users'
import ReactScrollToBottom from "react-scroll-to-bottom";

const Messages = () => {

  const [OpenMessage, setOpenMessage] = useState(false)
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")
  return (
    <div className='MainMessageDiv'>

      <div className="messageSidepanel">
        <Users setOpen={setOpenMessage} />
        <Users setOpen={setOpenMessage} />
        <Users setOpen={setOpenMessage} />

      </div>

      <div style={{ display: OpenMessage === true ? "none" : "block" }} className="emptyContainer">
        NO USER IS SELECTED
      </div>

      <div style={{ display: OpenMessage === false ? "none" : "block" }} className="messageContainer">
        <ReactScrollToBottom className={"chatBox"}>
          {/* {messages.map((item, i) => <Message  key={i} user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)} */}
        </ReactScrollToBottom>
        <div className={"InputBox"}>
          <input onKeyPress={(event) => event.key === 'Enter' ? () => { } : null} placeholder='Message' type="text" id={"chatInput"} value={message} onChange={e => setMessage(e.target.value)} />
          <button className={"sendbtn"} disabled={message === "" ? true : false}>Send</button>
        </div></div>

    </div>
  )
}

export default Messages
