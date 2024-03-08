import React from "react"


function Admin(){
    return(
<>
<div className="flex justify-around  px-20">
<img src="https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg " className="w-2/5 pt-5" alt="" />
<div  className="
mt-24 text-2xl text-center  bg-slate-200  w-1/3 h-80 pt-5 rounded-3xl">
<form>



    <h1 className="text-black" > Admin Login </h1>
    
        <div className="my-4">

<input className="px-5 py-2" type="text" placeholder="Username"/> <br/>
</div>

    <div className="my-4">  
        <input className="px-5 py-2" type="password" placeholder="Password"/> <br/>
    </div>  
       <div> 
       <button  className="bg-blue-800 px-5 py-2 rounded-3xl" > Login </button>
        </div> 

        <div className="my-4">
            <a className="text-black text-2xl">
                Remember Password
            </a>
        </div>
  
        </form>
        
        </div>     
    
</div>
</>
    );
}
export default Admin;