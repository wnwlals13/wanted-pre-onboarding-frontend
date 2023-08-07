import { useState, useRef } from 'react';
import styled from 'styled-components';
import { getTodos, createTodo } from '../repository/Todo';
import TodoItem from '../components/TodoItem';
/**
 * 투두리스트 페이지 (Todo)
 * 
 * @author 주지민(wnwlals13)
 */
/* Style */
const Container = styled.div`
    height : 90vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

const TodoField = styled.form`
    display : flex;
    margin-bottom : 20px;
    width : 500px;
`;

const TodoListSection = styled.div`
    display : flex; 
    flex-direction : column;
    height : 70%;
`;

const TodoInput = styled.input`
    width : 90%;
`;

function Todo() {
    /* Data */
    const dataId = useRef(0);
    const [todos, setTodos] = useState([]); 
    const [text, setText] = useState('');

    /* Function */
    const handleChange = (e) => {
        setText(e.target.value);
    };

    /**
     * Function : handleSubmit (투두추가)
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const text = document.querySelector("#login-form input").value;
        const newTodos = {
            todo : text
        };
        
        // #1. todo 생성
        createTodo(newTodos)
            .then((res) => {
                loadTodos();
                setText('');
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const handleUpdate = () => {

    };

    const handleDelete = (e) => {
        console.log(e);
        // deleteTodo({id})
        //     .then(() => {
        //         loadTodos();
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    };

    /**
     * Function : loadTodos (투두목록세팅) 
     */
    const loadTodos = () => {
        getTodos()
            .then((res) => {
                setTodos(res.data);
            })
            .catch((err) => {
                console.log('err',err);
            })
    };

    useState(() => {
        loadTodos();
    },[]);

    return(
        <Container >
            <TodoField id="login-form" onSubmit={handleSubmit}>
                <TodoInput data-testid="new-todo-input" onChange={handleChange} value={text} placeholder='insert todo...'/>
                <button data-testid="new-todo-add-button" >추가</button>
            </TodoField>
            <TodoListSection>
                {
                    todos.map((item) => {
                        return (
                            <TodoItem 
                                data={item}
                                loadTodos={loadTodos}
                            />
                        )
                    })
                }
            </TodoListSection>
        </Container>
    );
}

export default Todo;