const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems:[],
    orderTotal: 0
};

const updateCartItems = (cartItems, item , idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
    if (item.count === 0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (book, item = {}, quantity) => {
    const {
            id = book.id,
            title = book.title,
            count = 0,
            total = 0
          } = item;
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    };
};

const updateOrder = (state, bookId, quantity) => {
    const book = state.books.find((book) => book.id === bookId);
    const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
    const item = state.cartItems[itemIndex];
    const newItem = updateCartItem(book, item, quantity);
    let price;

    if(quantity === -1){
        price = -book.price
    }else if(quantity === 1) {
        price = book.price
    }else if(quantity < -1){
        price = -item.total
    }

    return  {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
        orderTotal: state.orderTotal + price
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return  {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART' :
            return updateOrder(state, action.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CART' :
            const book = state.cartItems.find((book) => book.id === action.payload);
            return updateOrder(state, action.payload, -book.count);
        default:
            return state;
    }
};

export default reducer;