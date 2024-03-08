
import React from "react"
function Home() {
   
  
    return (
      <>


<div className='flex justify-around px-11 py-20'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jB2b-O9lZpYfytiSO8iSZc-5s9bcYciIdlaKwwg&s=0"className='w-3/6 rounded-2xl' alt="" />
<div className=' my-8  flex items-center text-center px-20' >


<form id='form'>
<h1 className='text-white text-lg'>
    USER LOGIN
</h1>


<input className='px-4 my-2 h-8' type='text' placeholder='Email' /> <br/>

<input className='px-4 my-2 h-8' type='password' placeholder='password'/> <br/>


<button className='bg-sky-500 px-6 h-8 my-2'> Log in </button>
 <br/>
<a> create account  </a>
</form>
</div>
</div>
      </>
    )
  }
  
  export default Home
  