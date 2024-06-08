import { AiFillCaretRight } from "react-icons/ai";


const Homepage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="card w-96 h-72 bg-base-100 shadow-2xl">
       
        <div className="card-body flex-col justify-between">
          <h2 className="card-title mx-auto text-2xl italic font-bold text-blue-900">Chatbox</h2>
          <div className="card-actions block ">
           
            <label className="block italic mb-2">Message: </label>
           <div className="flex items-center">
           <input placeholder="Aa" type="text" name="" id="" className="p-1 px-3 w-full  border-base-300 border rounded-xl" /> 
          <button> <AiFillCaretRight className="ms-2 text-2xl text-green-950"></AiFillCaretRight></button>
           </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
