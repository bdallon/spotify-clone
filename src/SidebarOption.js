import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, SvgIcon }) {
  return (
    <div className='sidebarOption'>
      {SvgIcon && <SvgIcon className='sidebarOption_icon' />}
      {SvgIcon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
