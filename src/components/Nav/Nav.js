import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * 메뉴 (Nav bar)
 * 
 * @author 주지민(wnwlals13)
 */

const Navbar = styled.nav`
  position : fixed;
  width : 100%;
  height : 40px;
  display: flex;
  justify-content : space-between;
  align-items : center;
  background-color: #ffffff;
  background-color: rgba( 255, 255, 255, 0.8 );
`;

const NavLogo = styled.div`
  margin-left : 20px;
`;

const NavList = styled.div`
  display : flex;
  margin-right : 20px;
`;

const Navitem = styled.li`
  list-style : none;
  padding-left : 15px;
`;

const NavLinkStyle = styled(NavLink)`
  color : black;
  &:link, &:active  {
    text-decoration : none;
  }
  &:hover {
    color : ${props => props.theme.fontColor.primary};
  }
`;

function Nav() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("loginToken") ? true : false);
    const navigate = useNavigate();

    return (  
        <Navbar>
          <NavLogo> LOGO </NavLogo>
          <NavList>
            <Navitem>
              <NavLinkStyle to="/">
                Home
              </NavLinkStyle>
            </Navitem>
            { isAuth ? 
              <Navitem>
                <NavLinkStyle onClick={() => {
                  localStorage.setItem("loginToken", "");
                  navigate("/");
                  window.location.reload();
                }}>
                  Signout
                </NavLinkStyle>
              </Navitem>
              : null
            }
            <Navitem>
              <NavLinkStyle to="/signin">
                Signin
              </NavLinkStyle>
            </Navitem>
            <Navitem>
              <NavLinkStyle to="/todo">
                Todo
              </NavLinkStyle>
            </Navitem>
          </NavList>
        </Navbar>
      );
}
export default Nav;