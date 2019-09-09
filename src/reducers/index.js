import { FETCH_BOOKS_REQUEST , FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE} from "../constants";

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
}

export const reducer = (state=initialState, action) => {

    switch (action.type) {
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case FETCH_BOOKS_REQUEST:
            return  {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }

        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        default: return state
    }

}