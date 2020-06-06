export const addToCart = id => {
    return {
        type: 'ADD_TO_CART',
        id
    }
};

export const removeItem = id => {
    return {
        type: 'REMOVE_ITEM',
        id
    }
};

export const minusQuantity = id => {
    return {
        type: 'MINUS_QUANTITY',
        id
    }
};

export const addQuantity = id => {
    return {
        type: 'ADD_QUANTITY',
        id
    }
};

export const cleanCart = () => {
    return {
        type: 'CLEAN_CART',
    }
};
