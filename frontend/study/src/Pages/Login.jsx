const Login=()=>{
    return(
        <>
       <div className="flex bg-gradient-to-br from-purple-50 to-pink-100 min-h-screen justify-between items-center">

        <div className="">
            <img src="r.jpg"/>
            {/* <img src="castle.png" className="h-140 w-100 mt-24 "/> */}

        </div>
        
        

        <div className="flex flex-col flex-1 justify-center items-center px-10 ">
            <div className="">
                <img src="welcome.png " className=" w-[480px] mt-[-160px] drop-shadow-xl  z-0 pointer-events-none"/>

            </div>

             <div className="flex flex-col  bg-[#C8A2C8]  rounded-xl px-20 py-10  mt-[-240px] ">
              
            <label className="text-white pt-15"> Name:</label>
            <input placeholder="Princess Name"
                className="px-6 py-3 rounded-full bg-white/90 border-none outline-none focus:ring-4 focus:ring-purple-300 transition-all text-purple-900 placeholder:text-purple-200"/>
             <label className="text-white"> Email</label>
            <input placeholder="Email"
                className="px-6 py-3 rounded-full bg-white/90 border-none outline-none focus:ring-4 focus:ring-purple-300 transition-all text-purple-900 placeholder:text-purple-200"/>
             <label className="text-white" > Password:</label>
            <input placeholder="Password"
                className="px-6 py-3 rounded-full bg-white/90 border-none outline-none focus:ring-4 focus:ring-purple-300 transition-all text-purple-900 placeholder:text-purple-200"/>
                
                <button className="mt-6 w-full py-4 bg-white text-[#C8A2C8] font-black rounded-full shadow-lg hover:bg-purple-50 hover:scale-[1.03] transition-all uppercase tracking-widest">
              Enter Castel
            </button>
          
                
            </div>
            <p className="mt-4">Already a Princess ?  just click here </p>
          


        </div>
       </div>
        </>
    )
}
export default Login;
