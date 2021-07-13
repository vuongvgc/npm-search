import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
export const searchRepositories = (term: any) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })
        try{
            const {data} = await axios.get('http://registry.npmjs.org/-/v1/search', {
               params: {
                    text: term
               }
            })
            const dataName = data.objects.map((res:any) => {
                return res.package.name
            })
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: dataName
            })
        }catch(err) {
           dispatch({
            type: ActionType.SEARCH_REPOSITORIES_FAIL,
            payload: err
           }) 
        }
    }
}