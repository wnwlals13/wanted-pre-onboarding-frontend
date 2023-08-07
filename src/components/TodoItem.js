import { useEffect, useState } from "react";
import { deleteTodo, updateTodo } from '../repository/Todo';
import styled from "styled-components";
/**
 * 투두 아이템 컴포넌트 (TodoItem)
 * 
 * @param {*} param0 
 * @returns 
 */
/* Style */
const StyledLi = styled.li`
    width : 500px;
`;

const StyledForm = styled.form`
    display : inline;
`;

function TodoItem({data, loadTodos}) {
    /* Data */
    const { id, todo, isCompleted } = data;
    const [isUpdate, setIsUpdate] = useState(false);
    const [text, setText] = useState('');
    const [isChecked, setIsChecked] = useState(isCompleted);

    const handleUpdate = (e) => {
        console.log(e);
        isUpdate ? setIsUpdate(false) : setIsUpdate(true)
        setText(todo);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodos = {...data, todo : text};
        
        updateTodos(newTodos);
    };

    const onCheck = (e) => {
        e.preventDefault();
        isChecked ? setIsChecked(false) : setIsChecked(true)
        const newTodos = {...data, isCompleted : !isChecked};

        updateTodos(newTodos);
    };

    /**
     * Function : 투두수정 (updateTodo)
     * @param {*} newTodos 
     */
    const updateTodos = (newTodos) => {
        updateTodo(newTodos)
            .then((res) => {
                console.log('res',res)
                loadTodos();
            })
            .catch((err) => {
                console.log('err',err)
            })
    }

    /**
     * Function : 투두삭제 (deleteTodo)
     */
    const handleDelete = () => {
        deleteTodo(id)
            .then((res) => {
                console.log('res',res)
                loadTodos();
            })
            .catch((err) => {
                console.log('err',err)
            })
    };

    useEffect(() => {
        setText(todo);
    },[])

    return (
        <StyledLi key={id}>
            <label>
                <input type="checkbox" checked={isChecked} onChange={onCheck} />
                { isUpdate ? null : <span>{todo}</span> }
            </label>
            {  isUpdate ? (
                <StyledForm onSubmit={handleSubmit}>
                    <input data-testid="modify-input" onChange={handleChange} value={text}/>
                    <button data-testid="submit-button" >제출</button>
                    <button data-testid="cancel-button" type="button" onClick={handleUpdate}>취소</button>
                </StyledForm>
            ) : (
                <>
                    <button data-testid="modify-button" onClick={handleUpdate}>수정</button>
                    <button data-testid="delete-button" onClick={handleDelete}>삭제</button>
                </>
            )}
        </StyledLi>
    );
}

export default TodoItem;