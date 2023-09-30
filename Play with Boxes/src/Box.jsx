import React from 'react'
import { useState } from 'react';

export default function Box(props) {
    const [on,setOn] =useState(props.on)
    const styles={
        backgroundColor:on?'black':'#fff'
    }
    function clickHandler(){
        setOn(!on)
    }
  return (
    <>
      <div className='box' style={styles} onClick={clickHandler}></div>
    </>
  )
}
