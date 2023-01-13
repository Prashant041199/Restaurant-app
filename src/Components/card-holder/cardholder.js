import React from 'react'
import './cardholder.css'
import Card from '../card/card'

const cardholder = ({dish,type,set}) => {
  
  return (
    <div className='card-hold'>
        {
          dish.map((d)=>{
            if(type==="all"){
              return <Card dish={d} key={d.id} set={set}/>
            }
            else if(d.category===type){
            return <Card dish={d} key={d.id} set={set}/>
            }
          })
        }
    </div>
  )
}

export default cardholder