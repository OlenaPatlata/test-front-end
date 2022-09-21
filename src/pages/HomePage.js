
import FormData from 'components/FormData';
import { useState } from 'react';
import Button from 'components/Button';

const HomePage = () => {
  const [checkAge, setCheckAge] = useState(true);
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  const onClickCheckAge = () => {
    setCheckAge(true);
    setRegister(false);
    setLogin(false);
  };
  const onClickRegister = () => {
    setCheckAge(false);
    setRegister(true);
    setLogin(false);
  };
  const onClickLogin = () => {
    setCheckAge(false);
    setRegister(false);
    setLogin(true);
  };


  return (<>
    <p>Please choose type of form</p>
    <div style={{ "display": "flex", "marginTop":"20px", "marginBottom":"20px" }}>
      <Button onClick={onClickCheckAge} text="Check age" name="deleteBtn" style={{ "marginRight":"20px" }}/>
      <Button onClick={onClickRegister} text="Register" name="deleteBtn" style={{ "marginRight":"20px" }}/>
      <Button onClick={onClickLogin} text="Login" name="deleteBtn" />
    </div>

    {checkAge && (<FormData type="checkAge"/>)}
    {register && (<FormData type="register"/>)}
    {login && (<FormData type="login"/>)}
  </>);
}

export default HomePage;