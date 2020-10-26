
const productsData = [
    {
        id: 1,
        name: "iPhone XS",
        description: "This is iPhone XS",
        type: "phone",
        capacity: 64,
        price: 500,
        image: '/images/iphone.png',
    },
    {
        id: 2,
        name: "iPhone 11 Pro",
        // description:"This is iPhone X",
        type: "phone",
        capacity: 256,
        price: 1000,
        image: '/images/ipad.png',
    },
    {
        id: 3,
        name: "iPhone X",
        description: "This is iPhone X",
        type: "phone",
        capacity: 64,
        price: 1500,
        image: '/images/iphone.png',
    },
    {
        id: 4,
        name: "iPhone  11 Pro Max",
        description: "This is iPhone X",
        type: "phone",
        capacity: 256,
        price: 2000,
        image: '/images/ipad.png',
    },
]

export const getProductsMap = (array) => {
    return array.reduce((obj, product) => ({
        ...obj,
        [product.id]: product,
    }), {})
}

export default productsData