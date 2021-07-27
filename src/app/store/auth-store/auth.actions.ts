import {createAction, props} from "@ngrx/store";

export const authenticatedAction = createAction('[App Auth] signIn authenticated');
export const notAuthenticatedAction = createAction('[App Auth] signIn notAuthenticated');
export const signInRequestAction = createAction('[App Auth] signIn', props<{ phone: string, password: string }>());
export const signInSuccessAction = createAction('[App Auth] signIn success', props<any>());
export const signInErrorAction = createAction('[App Auth] signIn error', props<any>());
