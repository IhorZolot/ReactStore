import React from 'react'

export const ProductCard = ({id, title, description, thumbnail, price }) => {
  return (
    <li>
      <img src={thumbnail}/>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <span>{price}</span>
        <button>Add to card</button>
      </div>
    </li>
  )
}
