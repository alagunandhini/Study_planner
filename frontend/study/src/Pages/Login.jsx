import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Login=()=>{
    // to store name, email, password
    const [form,setForm]=useState({
        name:"",
        email:"",
        password:""
    });

     const handleChange=(e)=>{
        setForm({...form ,[e.target.name]:e.target.value}) ;

        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
       
        
        console.log(form);
        
    }
   const [signup,setSignup] = useState(false);
    return(
        <>
        <ToastContainer  position="bottom-center" autoClose={4000} />
       <div className="flex bg-gradient-to-br from-purple-50 to-pink-100 min-h-screen justify-between items-center">

        <div className="">
            <img src="r.jpg"/>
            {/* <img src="castle.png" className="h-140 w-100 mt-24 "/> */}

        </div>
        
        

        <div className="flex flex-col flex-1 justify-center items-center px-10 ">
            <div className="">
                <img src="welcome.png " className=" w-[480px] mt-[-160px] drop-shadow-xl  z-0 pointer-events-none"/>

            </div>

             <form className="flex flex-col  bg-[#C8A2C8]  rounded-xl w-[420px] px-10 py-10  mt-[-240px] " onSubmit={handleSubmit}>
              
            {signup && (<><label className="text-white pt-15"> Name:</label>
            <input  name="name" placeholder="Princess Name"  onChange={handleChange} required
                className="w-full px-6 py-3 rounded-full bg-white/90 border-none outline-none focus:ring-4 focus:ring-purple-300 transition-all text-purple-900 placeholder:text-purple-200"/></>)}
             <label className={`text-white ${signup?"m-0":"mt-10"} `} > Email</label>
            
            <input type="email" name="email"  placeholder="Email"  required  onChange={handleChange}
                className="px-6 py-3 rounded-full bg-white/90 border-none outline-none focus:ring-4 focus:ring-purple-300 transition-all text-purple-900 placeholder:text-purple-200"/>
             <label className="text-white" > Password:</label>
            <input  type="password" name="password" placeholder="Password"  required  onChange={handleChange}
                className="px-6 py-3 rounded-full bg-white/90 border-none outline-none focus:ring-4 focus:ring-purple-300 transition-all text-purple-900 placeholder:text-purple-200"/>
                
                <button type="submit" className="mt-6 w-full py-4 bg-white text-[#C8A2C8] font-black rounded-full shadow-lg hover:bg-purple-50 hover:scale-[1.03] transition-all uppercase tracking-widest">
              Enter Castle
            </button>
          
                
            </form>
            <p className="mt-4">{signup? "Already a princess ? ":"New here ?"}  <span onClick={()=> setSignup(!signup)}> Click here </span></p>
          
          


        </div>
       </div>
        </>
    )
}
export default Login;
