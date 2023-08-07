import styled from 'styled-components';
/**
 * 버튼 공통 컴포넌트 (Button)
 * 
 * @author 주지민(wnwlals13)
 */
const StyledButton = styled.button`
    color : ${props => props.theme.fontColor.primary};
    border : solid 1px ${props => props.theme.fontColor.primary};
    background-color : ${props => props.theme.fontColor.white};
    width : 250px;
    height : 40px;
    border-radius : 20px;

    &:hover {
        color : ${props => props.disabled? props.theme.fontColor.primary : props.theme.fontColor.white};
        background-color : ${props => props.disabled? props.theme.fontColor.white : props.theme.fontColor.primary};
        cursor : ${props => props.disabled? 'not-allowed' : null};
    }
`;

function Button({ btnText, disabled, ...rest }) {
    return(
        <StyledButton disabled={disabled} {...rest}>{btnText}</StyledButton>
    );
}

export default Button;