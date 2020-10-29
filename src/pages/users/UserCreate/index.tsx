import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow
} from '@coreui/react'
import { mainSelector } from '../../../selectors/selector';
import { item } from '../../../actions';
import { Common } from '../../common/index';
import './main.scss'
import '../../../scss/style.scss';

export const UserCreate = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const mainData = useSelector(mainSelector.SaveUserDataSelector);
  const [username, setUsername]: [string, any] = useState("");
  const [email, setEmail]: [string, any] = useState("");
  const [role, setRole]: [string, any] = useState("");
  const [name, setName]: [string, any] = useState("");
  const [password, setPassword]: [string, any] = useState("");

  const handleSub = () => {
    dispatch(item.saveUser({username,email,role,name,password}));
  }

  useEffect(() => {
    if(mainData&&mainData.data){
      dispatch(item.saveUserSuccess(null))
      history.push("/users/manager")
    }
  }, [mainData,history,dispatch])
  return <Common>
    <CRow>
      <CCol xs="12" sm="6">
        <CCard>
          <CForm className="form-horizontal"  onSubmit={(event)=>{
                handleSub();
                event.preventDefault();
            }} >
            <CCardHeader className="user-create-header">
              <h2>ユーザ登録</h2>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="username"> <span style={{fontWeight:"bold"}}>ユーザID</span></CLabel>
                    <CInput id="username" placeholder="例：0001" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setUsername(e.target.value);
                    }} required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name"><span style={{fontWeight:"bold"}}>ユーザ名</span></CLabel>
                    <CInput id="name" placeholder="例：日本　太郎" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setName(e.target.value);
                    }} required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="Email"><span style={{fontWeight:"bold"}}>メールアドレス</span></CLabel>
                    <CInput id="Email" placeholder="例：aaa@bbb.com" required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setEmail(e.target.value);
                    }}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="role"><span style={{fontWeight:"bold"}}>権限区分</span></CLabel>
                    <CInput id="role" placeholder="例：admin" required
                     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setRole(e.target.value);
                    }}/>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="password"><span style={{fontWeight:"bold"}}>パスワード</span></CLabel>
                    <CInput id="password" type="password"  placeholder="例：password" required
                     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setPassword(e.target.value);
                    }} />
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter style={{textAlign:"right"}}>
            <CButton type="submit" color="success">登録</CButton>　
            <CButton
              onClick={() => history.push("/main")}
              color={'success'}>
              戻る
            </CButton>
     
            </CCardFooter>
          </CForm>

        </CCard>
      </CCol>
    </CRow>
  </Common>
}