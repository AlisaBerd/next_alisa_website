import React from 'react';
import Header_left from "./Header_left/Header_left";
import Header_center from "./Header_center/Header_center";
import head from "./Header.module.css"

const Header = () => {
  return (
    <div className={head.header}>
      <Header_left />
      <Header_center />
    </div>
  )
}

export default Header
