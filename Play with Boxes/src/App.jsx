import React, {useState} from 'react'
import boxes from './boxes'
import Box from './Box'

export default function App() {
  const [value,setValue]=useState(boxes)

  const data=value.map(item=>{
    return <Box key={item.id} on={item.on} />
  })
  return (
    <>
      <main>
        {data}
      </main>
    </>
  )
}
