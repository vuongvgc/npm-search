import { combineReducers } from "redux";
import { repositoriesReducers } from './repositoriesReducer';

const rootReducers = combineReducers({
    repositories: repositoriesReducers
})
export default rootReducers
export type RootState = ReturnType<typeof rootReducers>