import axios from 'axios';
import apiClient from '../api/ApiClient';
/**
 * API Auth 가이드
 * 
 * @author 주지민(wnwlals13) 
 */

/* Signup (회원가입) */
export const signUpUser = async ({ email, password }) => {
    try{
        const result = await apiClient.post( "/auth/signup", {
            email,
            password
        });
        return result;
    } catch (err) {
        console.log("[auth] Error >>", err);
        if( err.response.data.message ){
            alert( err.response.data.message );
          }
    }
};

/* SignIn (로그인) */
export const signInUser = async ({ email, password }) => {
    try{
        const result = await apiClient.post( "/auth/signin", {
            email,
            password
        });

        const token = result.data.access_token;
        token && localStorage.setItem('loginToken', token);

        return result;
    } catch (err) {
        console.log("[auth] Error >>", err);
        if( err.response.data.message ){
            alert( err.response.data.message );
          }
    }
};
