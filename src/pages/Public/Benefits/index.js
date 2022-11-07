import React from 'react'
import List from './List'
import NFC from './NFC'
import Slider from './Slider'

const Benefits = () => {
  return (
   <div className="bg-bc min-h-screen w-full grid auto-rows-auto gap-4">
      <List/>
      <NFC/>
      <Slider />
    </div>
  )
}

export default Benefits