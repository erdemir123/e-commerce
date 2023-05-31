"use client"
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const Navbar = () => {
    const { data: session } = useSession();
    console.log(session)
  return (
    <div >
      <span >Chat App</span>
      <div>
        <img src={session?.user?.image!} alt="" /> 
        <span>{session?.user?.email!}</span>
        <br />
        <button onClick={()=>signOut()}>logout</button>
      </div>
      {/* <Webcam /> */}
    </div>
  )
}

export default Navbar