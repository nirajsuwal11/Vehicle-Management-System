import React from "react";
function Signup(){
    return(
        <>

<div className="flex align-middle justify-center h-screen  text-center py-20"> 
        <div className="">
            <form action="" name="Formfill">
                <h2 className="text-3xl text-white"> Register </h2>
                <div className="my-4 ">
                    <input className="px-5 py-2" type="text" name="Username" placeholder="Username"/>
                </div>
                <div className="my-4 ">
                    <input className="px-5 py-2" type="email" name="Email" placeholder="Email"/>
                </div>
                <div className="my-4">
                    <input className="px-5 py-2" type="password" name="Password" placeholder="Password"/>
                </div>

                <div className="my-4">
                    <input className="px-5 py-2" type="password" name="cPassword" placeholder="Confirm Password"/>
                </div>
                <div className="wrapper">

              
                <div>
                    <input className="px-10 py-2 bg-blue-600" type="submit"   value="Sign up"/>
                </div>
                
                <div className="my-4 text-white">
                    <span className=""> <a href=""> Forgot Password </a> </span>
                    <br></br>
                    
                </div>
            </div>
            </form>
        </div>
    </div>
        </>
    );
}
export default Signup