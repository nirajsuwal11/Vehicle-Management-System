import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <>
<nav className="flex justify-between flex-wrap-reverse bg-blue-900 text-white h-14 px-20 items-center">
<h1 className="text-4xl font-extrabold text-white"> VMS </h1>
<ul className="flex gap-6 " id="menu ">
                
                <li className="bg-blue-900 px-6 py-2" ><Link to={"/Signup"} className=""><i class="fa fa-home"></i><span >Sign Up</span></Link></li>
                <li className="bg-blue-900 px-6 py-2" ><Link to={"/"} ><i class="fa fa-user"></i><span>User Login</span></Link></li>
                <li className="bg-blue-900 px-6 py-2" ><Link to={"./Admin"}><i class="fa fa-folder-open"></i><span>Admin Login</span></Link></li>
                <li className="bg-blue-900 px-6 py-2" ><Link ><i class="fa fa-envelope-open"></i><span>Contact US</span></Link></li>
                <li className="bg-blue-900 px-6 py-2" ><Link to={"/"} ><i class="fa fa-envelope-open"></i><span>Home</span></Link></li>
         
            </ul>
</nav>
        </>
    )
}
export  default Nav;
