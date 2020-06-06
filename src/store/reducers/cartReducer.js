import Pizza1 from '../../assets/images/pizza (1).jpeg';
import Pizza2 from '../../assets/images/pizza (2).jpeg';
import Pizza3 from '../../assets/images/pizza (3).jpeg';
import Pizza4 from '../../assets/images/pizza (4).jpeg';
import Pizza5 from '../../assets/images/pizza (5).jpeg';
import Pizza6 from '../../assets/images/pizza (6).jpeg';
import Pizza7 from '../../assets/images/pizza (7).jpeg';
import Pizza8 from '../../assets/images/pizza (8).jpeg';

import Drink1 from '../../assets/images/Drinks (1).jpeg';
import Drink2 from '../../assets/images/Drinks (2).jpeg';
import Drink3 from '../../assets/images/Drinks (3).jpeg';
import Drink4 from '../../assets/images/Drinks (4).jpeg';
import Drink5 from '../../assets/images/Drinks (5).jpeg';
import Drink6 from '../../assets/images/Drinks (6).jpeg';

const initState = {
    pizzas: [
        {id:1,title:'Cheese pizza 24 cm', desc: "Double mozzarella and tomato sauce on a traditional dough of 24 cm - a minimalistic dish for the most selective in food.", price: 5, img: Pizza1},
        {id:2,title:'Caprese pizza 30 cm', desc: "Simple and easy pizza with mozzarella, tomatoes and gourmet pesto with balsamic caramel on thin crust with almost no crust.", price: 8,img: Pizza2},
        {id:3,title:'Pizza "Singapore" 24 cm', desc: "Tender chicken, spicy jalapenos and Tom Yam sauce - author's Asian-style pizza on a traditional 24 cm pastry.", price: 7,img: Pizza3},
        {id:4,title:'Bergen pizza 30 cm', desc: "Seafood pizza with a Nordic character: tender salmon, juicy broccoli, olives, pesto and creamy sauce.", price: 9,img: Pizza4},
        {id:5,title:'Four seasons pizza 30 cm', desc: "Two hearty meat pizzas and two vegetarian pizzas in one - pepperoni, ham, mushrooms and a bright vegetable mix.", price: 15,img: Pizza5},
        {id:6,title:'Pizza "El Paso" 24 cm', desc: "Hot Mexican pizza with spicy beef, corn, bell pepper and jalapenos on a traditional dough of 24 cm. Famous appetizing combination.", price: 14,img: Pizza6},
        {id:7,title:'Pizza "Farm" 30 cm', desc: "Original pizza with smoked potatoes, tender bacon, pickled cucumbers, crispy onions and tartar sauce.", price: 7,img: Pizza7},
        {id:8,title:'Pizza "Cheese Border" 30 cm', desc: "Original pizza with smoked potatoes, tender bacon, pickled cucumbers, crispy onions and tartar sauce on traditional pastry.", price: 18,img: Pizza8},
    ],
    drinks: [
        {id:9,title:'Pepsi Lite', price: 5, img: Drink1},
        {id:10,title:'Lemonade', price: 5, img: Drink2},
        {id:11,title:'Fanta', price: 5, img: Drink3},
        {id:12,title:'Fruit drink', price: 3, img: Drink4},
        {id:13,title:'Pepsi', price: 7, img: Drink5},
        {id:14,title:'Tomato juice', price: 8, img: Drink6},
    ],
    addedItems:[],
    total: 0,

}
const cartReducer = (state = initState, action)=> {
    if(action.type === 'ADD_TO_CART'){
        let addedItem = state.pizzas.find(pizza => pizza.id === action.id) || state.drinks.find(drink => drink.id === action.id) ;
        let existed_item= state.addedItems.find(item => action.id === item.id);
        if(existed_item)
        {
            addedItem.quantity += 1;
            return{
                ...state,
                total: state.total + addedItem.price
            }
        }
        else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price;

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }

        }
    }

    if(action.type === 'REMOVE_ITEM') {
        let itemToRemove = state.addedItems.find(item => action.id === item.id);
        let new_items = state.addedItems.filter(item => action.id !== item.id);
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === 'ADD_QUANTITY'){
        let addedItem = state.pizzas.find(item => item.id === action.id) || state.drinks.find(drink => drink.id === action.id);
        addedItem.quantity += 1;
        let newTotal = state.total + addedItem.price;
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === 'MINUS_QUANTITY'){
        let addedItem = state.pizzas.find(item => item.id === action.id) || state.drinks.find(drink => drink.id === action.id);
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item => item.id !== action.id);
            let newTotal = state.total - addedItem.price;
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price;
            return{
                ...state,
                total: newTotal
            }
        }
    }

    if (action.type === 'CLEAN_CART') {
        return {
            ...state,
            addedItems: [],
            total: 0
        }
    }

    return state
};

export default cartReducer;