import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory,useLocation } from 'react-router-dom';
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

export const UserEdit = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const location:any = useLocation();
  const mainData = useSelector(mainSelector.SaveUserDataSelector);
  
  const { user } = location.state
  const [username]: [string, any] = useState(user.username);
  const [email, setEmail]: [string, any] = useState(user.email);
  const [role]: [string, any] = useState(user.role);
  const [name, setName]: [string, any] = useState(user.name);
  const [password, setPassword]: [string, any] = useState(user.password);

  const handleSub = () => {
    dispatch(item.updateUser({id: user.id,username,email,role,name,password}));
  }
  useEffect(() => {
    if(mainData&&mainData.data){
      dispatch(item.updateUserSuccess(null))
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
              <h2>ユーザ情報</h2>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="username"><span style={{fontWeight:"bold"}}>ユーザID</span></CLabel>
                    <CInput id="username"
                      value={username} readOnly />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name"><span style={{fontWeight:"bold"}}>ユーザ名</span></CLabel>
                    <CInput id="name" 
                      value={name}
                      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setName(e.target.value);
                    }} required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="Email"><span style={{fontWeight:"bold"}}>メールアドレス</span></CLabel>
                    <CInput id="Email"
                      value={email}  required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setEmail(e.target.value);
                    }}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="role"><span style={{fontWeight:"bold"}}>権限区分</span></CLabel>
                    <CInput id="role"
                      value={role} readOnly/>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="password"><span style={{fontWeight:"bold"}}>パスワード</span></CLabel>
                    <CInput id="password" 
                      value={password} type="password" required
                     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setPassword(e.target.value);
                    }} />
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter style={{textAlign:"right"}}>
            <CButton type="submit"  color="success">保存</CButton>          　
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