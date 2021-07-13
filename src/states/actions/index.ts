import {ActionType} from '../action-types/index'

interface searchRepositoriesActions {
    type: ActionType.SEARCH_REPOSITORIES,
}
interface searchRepositoriesSuccessActions {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: String[]
}
interface searchRepositoriesFailActions {
    type: ActionType.SEARCH_REPOSITORIES_FAIL,
    payload: String
}

export type Action = searchRepositoriesActions | searchRepositoriesSuccessActions | searchRepositoriesFailActions