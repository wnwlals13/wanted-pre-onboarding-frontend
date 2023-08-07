import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
/**
 * 버튼 공통 컴포넌트 (Button)
 * 
 * @author 주지민(wnwlals13)
 */
const StyledInputField = styled.div`
    position : relative;
    vertical-align : middle;
    margin-bottom : 22px;
    height : 40px;
`;

const StyledIcon = styled.span`
    position : absolute;
    top : 50%;
    transform: translate(100%, -50%);
    color: #4f5b66;
    z-index : 1;
`;

const StyledInput = styled.input`
    position : absolute;
    width : 85%;
    height : 40px;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    border : solid 1px #A9A9A9;
    border-radius : 20px;
    color : ${props => props.theme.fontColor.fontPrimary};
    padding : 0 0 0 15%;
`;

const ErrorMsg = styled.div`
    position : absolute;
    top : 100%;
    margin : 2px 0 10px 10px;
    font-size : ${props => props.theme.fontSize.sm};
    color : ${props => props.theme.fontColor.warning};
`;

function InputField({ placeholder, type, name, setValues, error, setErrors, ...rest }) {
    const handleChange = e => {
        if( name==="email" ) {
            setValues((prevState) => {
                return { ...prevState, email : e.target.value }
            });
        }
        if( name==="password" ) {
            setValues((prevState) => {
                return { ...prevState, password : e.target.value }
            });
        }
    };

    const handleBlur = e => {
        let msg = "";
        if( name === "email" ) {
            const regex = /[@]/g;
            msg = !regex.test(e.target.value) ? "이메일 형식대로 입력해주세요." : "";
            setErrors((prevState) => {
                return { ...prevState, email : msg }
            });
        } else if ( name === "password" ) {
            const regex = /.{8,}/;
            msg = !regex.test(e.target.value) ? "비밀번호는 최소 8자이상 입력해주세요." : "";
            setErrors((prevState) => {
                return { ...prevState, password : msg }
            });
        }
    };
    
    return(
        <StyledInputField>
            <StyledIcon>
                <FontAwesomeIcon icon={ placeholder==="Email" ? faUser : faLock }></FontAwesomeIcon>
            </StyledIcon>
            <StyledInput placeholder={placeholder} type={type} onChange={handleChange} onBlur={handleBlur}></StyledInput>
            <ErrorMsg>{error}</ErrorMsg>
        </StyledInputField>
    );
}

InputField.defaultProps = {
    onChange : () => {}
};

export default InputField;