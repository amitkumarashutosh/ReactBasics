import React from 'react'
import Card from './Card'
import Data from '../data.jsx'

export default function Section() {
    const HotelData=Data.map((item)=>{
        return <Card 
            key={item.id}

            // img={item.img} 
            // name={item.name}
            // rating={item.rating}
            // reviewCount={item.reviewCount}
            // price={item.price}
            // location={item.location}
            // openSpot={item.openSpot}

            /*props.img ----before object pass*/
            /*or pass {..item} word as same way*/
            
            item={item}
            /*props.item.img after object pass*/
            />
    })
  return (
    <>
        <section>
            <div className="heading">
                <h1>Online Experience</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero officia tempora incidunt, aliquam quae tenetur voluptatem sapiente a laudantium nam!</p>
            </div>
            <section className="card-list">
                {HotelData}
            </section>
        </section>
    </>
  )
}
