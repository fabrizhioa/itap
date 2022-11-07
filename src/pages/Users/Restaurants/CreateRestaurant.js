import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom'
import Form from '../../../components/users/forms/form'
import { InputSocialsWithList, InputT, InputWithList } from '../../../components/users/forms/inputs'

const CreateRestaurant = () => {
  const [phoneValue, setPhoneValue] = useState([])
  const [directionValue, setDirectionValue] = useState([])
  const [timesValue, setTimesValue] = useState([])
  const [socialValue, setSocialValue] = useState([])
  const [imageValue, setImageValue] = useState(null)

  return (
    <div className='flex flex-col items-center gap-4 p-2 w-full'>
        <h2 className="w-full text-xl font-medium">Crear nuevo restaurante</h2>
      <Form>
        <InputT name="nombre" title="Nombre"/>
      
        <InputWithList value={phoneValue} setValue={setPhoneValue} type="tel" title="Telefonos"/>
        <InputWithList value={directionValue} setValue={setDirectionValue} type="tel" title="Direcciones"/>
        <InputWithList value={timesValue} setValue={setTimesValue} type="tel" title="Horarios"/>
        <InputSocialsWithList value={socialValue} setValue={setSocialValue} type="tel" title="Redes sociales"/>

       
        <div className='w-full'>
            <span className='block font-medium'>Imagen:</span>
            <label htmlFor="imageSubmit"   className="bg-c hover:bg-tg hover:text-white rounded-sm px-2 py-1 text-center cursor-pointer block text-sm">Subir </label>
            <input type="file" className='hidden' id='imageSubmit'  onChange={(e) => {setImageValue(e.target.files[0]); console.log(e.target)}}/>
        </div>
        {imageValue !== null && <div className='relative '><button onClick={() => {setImageValue(null);}} type="button" className='text-white drop-shadow-sm absolute top-0 right-1 z-10 text-lg'>X</button><img src={URL.createObjectURL(imageValue)} className="w-full aspect-square"/></div>}
        <button className='bg-c px-2 py-2 font-medium hover:bg-tg hover:text-white rounded-sm w-2/4 m-auto'>Registrar nuevo restaurante</button>
        {console.log(imageValue)}
      </Form>
    </div>
  )
}

export default CreateRestaurant