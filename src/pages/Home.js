import styled from 'styled-components';
import { useEffect } from 'react';
/**
 * 홈 페이지 (Home)
 * 
 * @author 주지민(wnwlals13)
 */

const Container = styled.div`
    height : 90vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

function Home() {

    useEffect(() => {
        console.log(localStorage.getItem("loginToken"));

        window.addEventListener('storage', (e) => {
          console.log(e.key);
        });
      },[]);
      
    return(
        <Container >wanted front end</Container>
    );
}

export default Home;