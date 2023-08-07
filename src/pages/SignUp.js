import styled from "styled-components";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useEffect, useState } from "react";
import { signUpUser } from "../repository/Auth";
import { useNavigate } from "react-router-dom";
/**
 * 회원가입 페이지 (SignUp)
 *
 * @author 주지민(wnwlals13)
 */
/* Style */
const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ErrorMsg = styled.div`
    margin : 2px 0 10px 10px;
    font-size : ${props => props.theme.fontSize.sm};
    color : ${props => props.theme.fontColor.warning};
`;

function SignUp() {
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
   * Function : 회원가입
   * @param {*} e 
   */
  const onSignUp = (e) => {
    e.preventDefault();
    signUpUser(values)
        .then((res) => {
            console.log('res',res)

            // 로그인페이지로 이동
            navigate("/signin");
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
      <h2>Sign Up</h2>
      <form onSubmit={onSignUp}>
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
          data-testid="signup-button"
          btnText="회원가입"
          type="submit"
          disabled={buttonStatus}
        ></Button>
      </form>
    </Container>
  );
}

export default SignUp;
