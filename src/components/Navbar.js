import React, { useState } from 'react'

import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
import {Link} from 'react-router-dom'
function Navbar() {
    const [toggle,setToggle] = useState(false);


    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
       <nav className={toggle ? 'navbar expanded' : 'navbar'}>
            <h2 className='logo'>Navbar</h2>
        <ul className='links'>
            
            <Link to='/post'onClick={handleToggle}>Post</Link>
            <Link to='/comment' onClick={handleToggle}>Comments</Link>
        </ul>
        <div className='toggle-icon' onClick={handleToggle}>
             {toggle ?<Icon icon={x} size={28}/> :<Icon icon={menu} size={28}></Icon>}
        </div>
      

       </nav>
    )

}
export default Navbar