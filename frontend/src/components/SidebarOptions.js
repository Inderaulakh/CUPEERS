import React from 'react'
import cupic from './CUSIDE.jpg'
import campus1 from "./campus1.jpg"
import campus2 from "./campus2.jpg"
import campus3 from "./campus3.jpg"
import campus4 from "./campus4.jpg"

const SidebarOptions = () => {
  return (
    <div>
      <img  style={{width:"230px",height:"128px"}}src={campus3} alt=""/>
      <img style={{width:"230px",height:"128px"}} src={campus4} alt=""/>
      <img style={{width:"230px",height:"128px"}} src={cupic} alt=""/>
      <img style={{width:"230px",height:"128px"}} src={campus1} alt=""/>
      <img style={{width:"230px",height:"128px"}} src={campus2} alt=""/>
      
      
    </div>
  )
}

export default SidebarOptions