import { Link } from "react-router-dom";
const Welcome=()=>{
    return(
        <>
        <div className="flex min-h-screen justify-between">

            <div className="flex items-center justify-center  gap-6">
                <img src="girl.jpg" />

                <div className="flex flex-col justify-center items-center mx-45 ">
                    <h1 className="pb-8">WELCOME TO <br/> <span className="text-purple-300 text-6xl" style={{fontFamily:"Tangled"}}> Rapunzel Palace </span></h1>
                      <Link to="/login"> <button className="bg-[#C27BA0] hover:bg-[#B5658C] text-white  px-8 py-4 mx- rounded-full">
                     Let's Start
                     </button> </Link>

                </div>
            
          


            </div>
          


        </div>
        
        </>
    )

}
export default Welcome;