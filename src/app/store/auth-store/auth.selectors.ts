import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AUTH_REDUCER} from "./auth-store.module";

const getFeature = createFeatureSelector(AUTH_REDUCER)

export const getIsFetching = createSelector(getFeature,
  (state: any) => state.isFetching
)

export const isAuthSelector = createSelector(getFeature,
  (state: any) => state.isAuth
)

export const authDataSelector = createSelector(getFeature,
  (state: any) => state.data
)

export const authTokenSelector = createSelector(getFeature,
  (state: any) => {
    const {accessToken = '', tokenType = ''} = state.data

    return `${tokenType} ${accessToken}`
  }
)

export class getAuthData {

}
