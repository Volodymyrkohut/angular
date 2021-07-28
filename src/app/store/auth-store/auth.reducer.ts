import {createReducer, on} from "@ngrx/store";
import {
  signInRequestAction,
  signInSuccessAction,
  signInErrorAction, notAuthenticatedAction, authenticatedAction,
} from "./auth.actions";


export const initialState: any = {
  isAuth: false,
  data: {
    accessToken: '',
    typeToken: '',
    expireDate: ''
  },
  isFetching: false,
};

const _authReducer = createReducer(
  initialState,
  on(authenticatedAction, (state) => {
    return {...state, isAuth: true};
  }),
  on(notAuthenticatedAction, (state) => {
    return {...state, isAuth: false};
  }),
  on(signInRequestAction, (state) => {
    return {...state, isFetching: true};
  }),
  on(signInSuccessAction, (state, {type, ...rest}) => {
    return {...state, isFetching: false, data: rest, isAuth: true};
  }),
  on(signInErrorAction, (state) => {
    return {...state, isFetching: false, isAuth: false};
  }),
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
