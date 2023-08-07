import styled from "styled-components";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useEffect, useState } from "react";
import { signInUser } from "../repository/Auth";
import { useNavigate } from "react-router-dom";
/**
 * 로그인 페이지 (SignIn)
 *
 * @author 주지민(wnwlals13)
 */
const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpField = styled.a`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.fontColor.fontSecodary};
  margin: 10px 0 0 0;
  cursor: pointer;
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function SignIn() {
  /* Data */
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email : "",
    password : ""
  });
  const [buttonStatus, setButtonStatus] = useState(true);
  const navigate = useNavigate();

  /* Function */
  /**
   * Function : 로그인
   * @param {*} e 
   */
  const onSingIn = (e) => {
    e.preventDefault();
    signInUser(values)
        .then((res) => {
            console.log('res',res)

            // 할일페이지로 이동
            navigate("/todo");
            window.location.reload();
        })
        .catch ((error) => {
            console.log('error', error)
        })
  };

  useEffect(() => {
    if( values.email.length > 0 && values.password.length > 0 && errors.email.length < 1 && errors.password.length < 1 ) {
        setButtonStatus(false);
    } else {
        setButtonStatus(true);
    }
  }, [errors]);

  return (
    <Container>
      <h2>Log In</h2>
      <form onSubmit={onSingIn}>
        <InputField
          data-testid="email-input"
          placeholder="Email"
          type="text"
          name="email"
          values={values}
          setValues={setValues}
          error={errors.email}
          setErrors={setErrors}
        />

        <InputField
          data-testid="password-input"
          placeholder="Password"
          type="password"
          name="password"
          values={values}
          setValues={setValues}
          error={errors.password}
          setErrors={setErrors}
        />

        <Button
          data-testid="signin-button"
          btnText="로그인"
          type="submit"
          disabled={buttonStatus}
        ></Button>
      </form>
      <SignUpField href="/signup">회원이 아니신가요?</SignUpField>
    </Container>
  );
}

export default SignIn;
