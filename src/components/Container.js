import styled from 'styled-components';
/**
 * 컨테이너 공통 컴포넌트 (Button)
 * 
 * @author 주지민(wnwlals13)
 */
const StyledContainer = styled.div`
    height : 90vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

function Container() {
    return(
        <StyledContainer></StyledContainer>
    );
}

export default Container;