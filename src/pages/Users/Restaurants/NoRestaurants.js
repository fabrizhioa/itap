import React from 'react'
import {MdError} from "react-icons/md"
import { Link } from 'react-router-dom'

const NoRestaurants = () => {
  return (
    <div className='grid w-full items-center justify-center'>
      <div className='text-center flex items-center justify-center flex-col gap-2'>
         <MdError className='text-6xl text-red-600'/>
         <h2 className='text-3xl text-tc'>Parece que no hay restaurantes</h2>
         <Link className='text-lg bg-tg p-2 rounded-md hover:text-white drop-shadow-sm active:drop-shadow-none' to="../create">Crea un nuevo restaurante</Link>
      </div>
    </div>
  )
}

export default NoRestaurants