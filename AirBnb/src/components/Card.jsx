import React from 'react'

export default function Card(props) {
    let badgeText;
    if(props.item.openSpot===0){
        badgeText="SOLD OUT"
    }else{
        badgeText="ONLINE"
    }
  return (
    <>
        <div className="card">
            <div className="card--badge">{badgeText}</div>
            <img src={`./images/${props.item.img}`} className="card--image" />  
            <div className="card-stats">
                <img src="./images/star.png" className='rating'/>
                <span>{props.item.rating}</span>
                <span className='gray'>({props.item.reviewCount})</span>
                <span className='gray'>{props.item.location}</span>
            </div>
            <p>{props.item.name}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    </>
  )
}
