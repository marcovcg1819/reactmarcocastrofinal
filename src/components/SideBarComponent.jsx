import React from "react";
import {Link} from 'react-router-dom';

const SideBarComponent=()=>{
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link style={{ textDecoration: 'none', color:'white' }}  to="/">Productos</Link> 
                </li>
            </ul>
        </div>
    )
}

export default SideBarComponent;