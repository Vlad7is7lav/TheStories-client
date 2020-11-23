import {USER_LOGIN, USER_AUTH, IActionLogin, IUserData} from '../reducers/types';


export interface IState {
    langName: string,
    storyAct: Number
}


export default function(state={}, action:IActionLogin): {} {
    switch(action.type){
        case USER_LOGIN:
            return {...state, auth: action.payload.auth, userData: action.payload.userData};
        
        case USER_AUTH: 
            return {
                ...state,
                auth: action.payload.auth ? action.payload.auth : false,
                userData: action.payload.userData ? action.payload.userData : false
            }
        default:
            return state
    }
}

//меняем стейт



