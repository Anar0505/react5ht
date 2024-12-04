import React, { useState } from 'react'
import './style.css'
function Drawer() {
const [isopen, setisopen] = useState(false)

  return (<>
    <button onClick={()=>setisopen(!isopen)} className={`drawer-btn ${isopen ? 'open' : ''}`}>   {isopen ? 'Close' : 'Open'}</button>
    <div className={isopen?"sidebar":"sidebar active"}></div>
 </> )
}

export default Drawer