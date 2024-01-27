


const products = [
    {
        id:'1',
        name:'woolly bugger',
        price:2000,
        category:'moscas',
        img:'',
        stock: 20,
        description:'moscas para pescar en el río',
    },
    {
        id:'2',
        name:'marabu',
        price:2700,
        category:'materiales',
        img:'',
        stock: 20,
        description:'principal material para atado de moscas',
    },
    {
        id:'3',
        name:'Matuka',
        price:2000,
        category:'moscas',
        img:'',
        stock: 20,
        description:'moscas para pescar en el río',
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
        
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve (products.find(prod => prod.id === productId))
        },500)
    }

    )
}