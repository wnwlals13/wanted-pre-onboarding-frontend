import { styled } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
/**
 * 푸터 (Footer)
 * 
 * @author 주지민(wnwlals13)
 */
const FooterSection = styled.div`
    position : fixed;
    width : 100%;
    height : 40px;
    display: flex;
    justify-content : center;
    align-items : center;
`;

const FooterText = styled.p`
    color : ${props => props.theme.fontColor.fontSecodary};
    font-size : ${props => props.theme.fontSize.sm};
`;

function Footer() {
    return(
        <FooterSection>
            <FooterText><FontAwesomeIcon icon={faCopyright} /> 2023 wnwlals13</FooterText>
        </FooterSection>
    );
}
export default Footer;