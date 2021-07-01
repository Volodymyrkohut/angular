import { sendData } from '../helpers/network';
import { SighInRequest, SignUpConfirm, SignUpRequest } from '../types/auth';

const actions = {
   signIn: (data: SighInRequest) => sendData('/auth/login-phone', data),
   signUpInitial: (data: SignUpRequest) => sendData('/auth/register/initialize', data), // sign up (Реєстрація. Крок №1. Ініціалізація)
   signUpConfirmCode: (data: SignUpConfirm) => sendData('/auth/register/confirm-code', data), // sign up confirm (Реєстрація. Крок №2. Підтвердження коду)
   signUpResendCode: (phone: string) => sendData('/auth/register/resend-code', phone), // (Регістрація. Крок №2.5. Вислати новий код)
   signUpComplete: (data: any, headers: any) => sendData('/auth/register/complete', data, headers),
};

export default actions;
