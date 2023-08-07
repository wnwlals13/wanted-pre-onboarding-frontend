import axios from 'axios';
import apiClient from '../api/ApiClient';
/**
 * API Todo 가이드
 * 
 * @author 주지민(wnwlals13) 
 */

/* createTodo (투두생성) */
export const createTodo = async ({ todo }) => {
    try{
        const result = await apiClient.post( "/todos", {
            todo
        },{
            headers : {
                Authorization : `Bearer ${localStorage.getItem("loginToken")}`
            }
        });
        return result;
    } catch (err) {
        console.log("[auth] Error >>", err);
    }
};

/* getTodos (투두목록보기) */
export const getTodos = async () => {
    try{
        const result = await apiClient.get( "/todos", {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("loginToken")}`
            }
        });
        return result;
    } catch (err) {
        console.log("[auth] Error >>", err);
    }
};

/* updateTodo (투두수정) */
export const updateTodo = async ({ id, todo, isCompleted }) => {
    try{
        const result = await apiClient.put( `/todos/${id}`, {
            todo,
            isCompleted
        },{
            headers : {
                Authorization : `Bearer ${localStorage.getItem("loginToken")}`
            }
        });
        return result;
    } catch (err) {
        console.log("[auth] Error >>", err);
    }
};

/* deleteTodo (투두삭제) */
export const deleteTodo = async (id) => {
    try{
        console.log(id);
        const result = await apiClient.delete( `/todos/${id}`, {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("loginToken")}`
            }
        });
        return result;
    } catch (err) {
        console.log("[auth] Error >>", err);
    }
};
