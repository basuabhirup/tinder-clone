import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
  return (
    <div className='header'>
      <IconButton >
        <PersonIcon className="header_icon" fontSize="large"/>
      </IconButton>
      <img 
      className="header_logo"
      src="https://1000marcas.net/wp-content/uploads/2019/12/Tinder-simbolo.jpg" 
      alt="Tinder Logo" />
      <IconButton>
        <ForumIcon className="header_icon" fontSize="large"/>
      </IconButton>
      
    </div>
  )
}

export default Header
