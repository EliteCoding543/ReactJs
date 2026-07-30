import React, { useReducer } from "react";


const initialState = {
  userName: "",
  pass: "",
  email: ""
};


const reducer = (state, action) => {

  switch(action.type){

    case "USERNAME":
      return {
        ...state,
        userName: action.payload
      };

    case "PASSWORD":
      return {
        ...state,
        pass: action.payload
      };

    case "EMAIL":
      return {
        ...state,
        email: action.payload
      };

    default:
      return state;
  }

};



const LoginForm = () => {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );


  return (

    // Center Container
    <div className="min-h-screen flex justify-center items-center">


      <div className=" bg-linear-to-tl from-gray-900 to-gray-800 border border-white w-125 h-113 p-10 flex gap-8 flex-col rounded-xl shadow-2xl ">


        <h1 className="text-white text-3xl font-bold text-center">
          Login Form
        </h1>


        <div className="text-white flex flex-col gap-5">


          <input
            onChange={(e)=>{
              dispatch({
                type:"USERNAME",
                payload:e.target.value
              })
            }}

            value={state.userName}

            className=" border rounded-xl w-full px-4 py-3 outline-none focus:border-blue-500 "

            type="text"

            placeholder="Enter user-name"
          />



          <input
            onChange={(e)=>{
              dispatch({
                type:"EMAIL",
                payload:e.target.value
              })
            }}

            value={state.email}

            className=" border rounded-xl w-full px-4 py-3 outline-none focus:border-blue-500 "

            type="email"

            placeholder="Enter your email"
          />



          <input
            onChange={(e)=>{
              dispatch({
                type:"PASSWORD",
                payload:e.target.value
              })
              
            }}

            value={state.pass}

            className=" border rounded-xl w-full px-4 py-3 outline-none focus:border-blue-500 "

            type="password"

            placeholder="Enter password"
          />


        </div>



        <div className="flex justify-center items-center">

          <button
            onClick={()=>{
              console.log(state)
            }}
            
            className=" bg-white font-bold px-10 py-3 rounded-xl hover:bg-blue-500 hover:text-white transition "
          >
            Submit
          </button>


        </div>


      </div>


    </div>

  )
}


export default LoginForm;