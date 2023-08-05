import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = ({products = []}) => {
    
  return (
    <div>
        <ul>
            { products.map(product => (<ProductCard {...product} />))}  
        </ul>
    </div>
  )
}
