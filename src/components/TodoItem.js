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
    margin-bottom : 10px;
    display : flex;
`;

const StyledForm = styled.form`
    display : inline;
`;

const TodoButton = styled.button`
    margin-left : 5px;
`;

function TodoItem({data, loadTodos}) {
    /* Data */
    const { id, todo, isCompleted } = data;
    const [isUpdate, setIsUpdate] = useState(false);
    const [text, setText] = useState('');
    const [isChecked, setIsChecked] = useState(isCompleted);

    const handleUpdate = (e) => {
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
        handleUpdate();
    };

    /**
     * Function : 투두 완료여부 체크 (onCheck)
     * @param {*} e 
     */
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
        window.location.reload();
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
                    <input data-testid="modify-input" onChange={handleChange} value={text} />
                    <TodoButton data-testid="submit-button" >제출</TodoButton>
                    <TodoButton data-testid="cancel-button" type="button" onClick={handleUpdate}>취소</TodoButton>
                </StyledForm>
            ) : (
                <div>
                    <TodoButton data-testid="modify-button" onClick={handleUpdate}>수정</TodoButton>
                    <TodoButton data-testid="delete-button" onClick={handleDelete}>삭제</TodoButton>
                </div>
            )}
        </StyledLi>
    );
}

export default TodoItem;