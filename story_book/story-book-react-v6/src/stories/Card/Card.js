import React from 'react'
import "./Card.css"

const Card = (props) => {
    const {title,body,Image} = props
  return (
    <div className='card container'>
        <div className='card-title'>
            {title}
        </div>
        <div className='card-img'>
            <img src={Image} alt={title}/>
        </div>
        <div className='card-body'>
            {body}
        </div>
        {/* <div className='card-footer'>
            <button variant="primary">Go somewhere</button>
        </div> */}
    </div>
  )
}

export default Card
