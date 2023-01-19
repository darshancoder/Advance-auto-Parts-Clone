import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
/*
Dont make any changes to this file
*/
function PrivateRoute({children}) {
  const authState = useSelector((state)=>state.auth)

  if(!authState.data.isAuthenticated){
    return <Navigate to={'/signup'} />
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute
