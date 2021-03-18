export const initialState = {
  basket: [],
  user: null,
  single:"",
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((sum, item) => sum + item.price,0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as it is not in basket!)`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    //default:
     // return state;

     case "Set_Single":
      return {
        
        single: action.item,
      };
    default:
      return state;
  
  }
  
};

export default reducer;
