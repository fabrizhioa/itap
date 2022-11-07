import React from 'react'
import { ListaBeneficios } from '../../../data'

const Beneficio = ({title, icon, description}) => {
   return <div className='p-4 md:border-[1px] text-center md:border-tc h-max md:aspect-square'>
    <img src={icon} alt="Icono" className='aspect-square w-16 m-auto' />
   <h4>{title}</h4>
   <p className='text-xs font-light'>{description}</p>
</div> 
}


const List = () => {
  return (
   <div className="order-2 md:order-1 grid auto-cols-auto  max-w-screen-lg m-auto">
  
     <h2 className='text-center text-3xl py-8 font-medium'>
     Algunos Beneficios
     </h2>

     <div className='md:grid auto-rows-auto  md:grid-cols-4 gap-4'>
      {ListaBeneficios.map((beneficio, key) => <Beneficio {...beneficio} key={key}/> )}
     </div>
    </div>
  )
}

export default List