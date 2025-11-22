    import React from 'react'
import { setLocalStorage } from '../../../utils/localStorage';

    function Header() {
      // if (!data) {
      //   return <div>Loading user data...</div>; // Or return null, or a skeleton loader
      // }
      const logOutUser=()=>{
        localStorage.setItem("loggedInUser",'');
        window.location.reload();


      }

      return (
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>sejal👋</span> </h1>
          <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white rounded-sm px-5 py-2'>Log out</button>
        </div>
      )
    }

    export default Header
    