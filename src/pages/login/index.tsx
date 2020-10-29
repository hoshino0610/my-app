import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@rakuten-rex/button';
import Panel from '@rakuten-rex/panel';
import FormGroup from '@rakuten-rex/form-group/FormGroup';
import TextFieldLabel from '@rakuten-rex/text-field/TextFieldLabel';
import PasswordLabel from '@rakuten-rex/password/PasswordLabel';
import _ from 'lodash';
import { item } from '../../actions';
import {
  loginSelector
} from '../../selectors/selector';
import './login.scss'
interface User {
  id?: number,
  username?: string,
  email?: string,
  role?: string,
  name?: string,
  password?: string
}
export const Login = () => {
  const dispatch = useDispatch()
  const loginData = useSelector(loginSelector.dataSelector);
  const userData = useSelector(loginSelector.userSelector);
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const handleLogin = () => {
    dispatch(item.login(userName,password));
  }
  useEffect(() => {
    dispatch(item.getUsers())
  }, [dispatch])
  
  localStorage.setItem("users",JSON.stringify(userData));
  localStorage.setItem("usersname",userName);
  const user = _.find(userData, function(o:User) { return o.username === userName; });
  localStorage.setItem("user",JSON.stringify(user));

  return <div
  　className={'rex-sign-up-desktop rex-sign-up-bg-a'} 
   role="presentation"
   style={{
     overflow:"hidden",
     height: "100vh"
   }}
  >
  {loginData&&loginData.login_status?(
    <Redirect to={{
      pathname: user&&user.role === 'admin'?"/main":"/users/info",
      state: { userName }
    }}></Redirect>
  ):null}
  <Panel
    shadow={4}
    px={5}
    pt={3}
    pb={8}
    style={{
      '--rex-panel-border-radius': '.5rem',
    }}
  >
    <section>
      <p className="rex-sign-up-desktop-title"><h2>ログインしてください</h2></p>
      <form>
        <fieldset>
          <FormGroup mb={4}>
            <TextFieldLabel
              name={'email'}
              placeholder=""
              htmlFor={'email'}
              label={'メールアドレス'}
              labelId={'signup_email'}
              onChange={(e:any)=>{
                setUserName(e.target.value)
              }}
            />
          </FormGroup>
          <FormGroup mb={5}>
            <PasswordLabel
              name={"password"}
              placeholder=""
              htmlFor={"password"}
              label='パスワード'
              labelId='signup_password'
              onChange={(e:any)=>{
                setPassword(e.target.value)
              }}
            />
          </FormGroup>
          <FormGroup mb={4} >
            <Button onClick={()=>{
              handleLogin()
            }}>{'登録する'}</Button>
          </FormGroup>
        </fieldset>
      </form>
    </section>
  </Panel>
</div>
}