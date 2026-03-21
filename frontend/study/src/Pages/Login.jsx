const Login=()=>{
    return(
        <>
       <div className="flex bg-pueple-200">
        <img src="castle.png" className="h-140 w-100 mt-24 "/>
        

        <div className="flex flex-col justify-center items-center">
            <div>
                <img src="welcome.png " className="absolute -top-20 w-120 h-120 absolute z-20"/>

            </div>

             <div className="flex flex-col  bg-purple-300 justify-start items-start  p-6 rounded-xl mt-4">
            <label> Name:</label>
            <input/>
             <label> Email</label>
            <input/>
             <label> Password:</label>
            <input/>
                
            </div>
          


        </div>
       </div>
        </>
    )
}
export default Login;
