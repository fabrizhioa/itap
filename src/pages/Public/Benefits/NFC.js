import React from 'react'

const NFC = () => {
  return (
   <div className="order-1 md:order-2 grid auto-rows-max md:grid-cols-2 auto-cols-auto  max-w-screen-lg m-auto bg-[#e8c187] items-center">
      <div className='p-4'>
         <h2 className='text-5xl text-center py-6'>Que es NFC ? </h2>
         <p className='text-xs text-center md:text-justify md:max-w-[60%] m-auto'>
         Near-field communication (NFC) o comunicación de campo cercano es una tecnología de comunicación inalámbrica, de corto alcance y alta frecuencia que permite el intercambio de datos entre dispositivos.
         </p>
      </div>
      <video src="https://video.wixstatic.com/video/d4abae_2eccff17fe0b4f06b8ecdca7265ff720/720p/mp4/file.mp4" autoPlay={true} muted={true} className="aspect-video md:aspect-square bg-white border-none"></video>
   </div>
  )
}

export default NFC