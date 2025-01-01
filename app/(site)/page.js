"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const RedirectToV1 = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/v1')
    },[])

  return (
    <div>
      
    </div>
  )
}

export default RedirectToV1
