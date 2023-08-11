// For Add Item to Cart
export const addCart = (product) => {
    return {
        type : "ADDCART",
        payload : product
    }
} 

// For Delete Item From Cart
export const DeleteCart = (product) => {
    return {
        type : "DELETEITEM",
        payload : product
    }
}


