'use client'

import React, {useEffect, useState} from 'react';
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";
import {usePathname} from "next/navigation";


const RedirectMobile = () => {
  const pathname = usePathname()
  const [isRun, setIsRun] = useState(false);
  if (!isRun) {
    setIsRun(true);
  }

  useEffect(() => {
    if (isMobile==false){
      window.location.assign(DESKTOP_URL + pathname)
    }
  },[isRun]);
  return (
    <>
    </>
  )
}

export default RedirectMobile
