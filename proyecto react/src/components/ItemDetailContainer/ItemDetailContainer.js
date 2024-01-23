import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect (()=>{
        getProductsById(itemId)
            .then(response =>{
                setProduct(response)
            })
            .catch (error =>{
                console.error(error)
            })
    },[itemId])





    useEffect (() => {
        getProductsById('1')
            .then (response => {
                setProduct(response)
            })
            .catch (error => {
                console.error(error)
            })
    },[])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer