import Image from 'next/image'
import React from 'react'
import Load from "@/assets/images/loading.gif"

const Loading = () => {
  return (
    <Image src={Load} style={{margin:"0 auto"}} width={1000} height={1000} alt='loading'/>
  )
}

export default Loading