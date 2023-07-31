'use client'

import React, {useEffect} from 'react';
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
import { usePathname } from 'next/navigation'

const Redirect = () => {
  // useEffect(() => {
  //   if (isMobile){
  //     window.location.assign(MOBILE_URL + navigateTo)
  //   }
  // },[]);
  const pathname = usePathname()
  if (isMobile){
        window.location.assign(MOBILE_URL + pathname)
      }
  return (
    <>
    </>
  )
}

export default Redirect
