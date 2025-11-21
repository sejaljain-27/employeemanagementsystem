//if sejal is employee then in authcontext all data will of sejal like email password role will be employeee
import React from 'react'

function AuthContext({children}) {
  return (
    <div>
      {children}
    </div>
  )
}   
export default AuthContext



