import { Action } from '../actions/index';
import { ActionType } from '../action-types/index'
interface repositoriesState {
    loading: Boolean,
    data: String[],
    error: String | null
}
const initialState = {
    loading: false,
    data: [],
    error: null
}

export const repositoriesReducers = (state: repositoriesState = initialState, action: Action): repositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_REPOSITORIES_FAIL:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state
    }
}
