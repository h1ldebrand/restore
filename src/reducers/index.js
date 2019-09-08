import { BOOKS_LOADED , BOOKS_REQUESTED, BOOKS_ERROR} from "../constants";

const initialState = {
    books: [],
    loading: true
}

export const reducer = (state=initialState, action) => {

    switch (action.type) {
        case BOOKS_REQUESTED:
            return {
                books: [],
                loading: true
            }
        case BOOKS_LOADED:
            return  {
                books: action.payload,
                loading: false
            }

        case BOOKS_ERROR:
            return {
                books: [],
                loading: false
            }
        default: return state
    }

}