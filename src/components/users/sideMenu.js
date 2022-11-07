import React from 'react'
import { NavLink  } from 'react-router-dom'
import { MdRestaurant,MdNotifications,MdStore,MdAdminPanelSettings,MdMenuBook} from "react-icons/md"
import { FaClipboardList} from "react-icons/fa"

import imagenes from "../../assets/imagenes"

const NavBarBtn = ({url, children}) => {
   return  <NavLink to={url} className={({isActive}) => `flex gap-1 items-center p-1 hover:text-tg border-[1px] border-transparent hover:border-tg  rounded-md ${isActive && "bg-[#e9d7a9] hover:text-white"}`}> {children}</NavLink>
}


const SideMenu = () => {
  return (
    <div className='bg-bc p-4 grid grid-rows-[max-content_auto_max-content] items-start '>
      <img src={imagenes.img4} alt="itap Image" className='w-32 mx-auto' />

      <nav className='grid auto-rows-max gap-2 py-4 text-tc '>
         <NavBarBtn url="restaurants">
            <MdStore /> Restaurantes
         </NavBarBtn>
         <NavBarBtn url="subadmins" >
            <MdAdminPanelSettings/> Subadministradores
         </NavBarBtn>
        
         <NavBarBtn url="menus" ><MdMenuBook/> Menus</NavBarBtn>
         <NavBarBtn url="platillos" ><MdRestaurant/> Platillos</NavBarBtn>
         <NavBarBtn url="reservations"><FaClipboardList/> Reservaciones</NavBarBtn>
         <NavBarBtn url="notifications"><MdNotifications/> Notificaciones</NavBarBtn>
      </nav>

      <div className='self-end grid grid-cols-[max-content_auto] gap-2 items-center'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDIdIEoKmi101JPpAOEpsDz65yTL315CgWly8LwDI&s" alt="" className='rounded-full w-14 aspect-square'/>
         <div>
            <h4 className='font-medium'>John Doe</h4>
            <p className='text-sm font-light text-tg'>@masterchef</p>
         </div>
      </div>
   </div>
  )
}

export default SideMenu