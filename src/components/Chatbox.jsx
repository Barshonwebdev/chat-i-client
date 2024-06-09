import { useEffect, useRef, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import socketIOClient from 'socket.io-client';

const ENDPOINT="http://localhost:5000";


const Chatbox = () => {
const [chats,setChats]=useState([]);
const [chat,setChat]=useState('');

useEffect(()=>{
  const socket=socketIOClient(ENDPOINT);



  // initial chat fetch 
  socket.on('initialchats',(initialchats)=>{
    setChats(initialchats);
  });

  // listen for new chats 
  socket.on('chats', (data)=>{
    setChats((prevChats)=>[...prevChats,data])
  });

  return ()=>{
   return socket.disconnect();
  };

},[chats])

const sendChat=()=>{
  const socket=socketIOClient(ENDPOINT);
  socket.emit('message',chat);
 
  setChat('');
  console.log(chats);
}

    return (
        <div>
             <div className="card w-96 h-96 bg-base-100 shadow-2xl">
       
       <div className="card-body flex-col justify-between">
         <h2 className="card-title mx-auto text-2xl italic font-bold text-blue-900">Chatbox</h2>
        <div>
        <div  className="border-base-300 border h-52 rounded-xl p-1 px-3 overflow-auto">
          {
            chats.map((msg,idx)=>(
              <div  className="" key={idx}>
                <p className="my-2">{msg.chat}</p>
              </div>
            ))
          }
         </div>
         <div className="card-actions block mt-7 ">
          
          <div className="flex items-center">
          <input value={chat} onChange={(e)=>setChat(e.target.value)} placeholder="Aa" type="text" name="" id="" className="p-1 px-3 w-full  border-base-300 border rounded-xl" /> 
         <button onClick={sendChat}> <AiFillCaretRight className="ms-2 text-2xl text-green-950"></AiFillCaretRight></button>
          </div>
          
         </div>
        </div>
       </div>
     </div>
        </div>
    );
};

export default Chatbox;