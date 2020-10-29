import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from '@coreui/react'
import {
  loginSelector,mainSelector
} from '../../../selectors/selector';
import { item } from '../../../actions';
import { Common } from '../../common/index';
import './main.scss'
import '../../../scss/style.scss';


export const MainContext: React.Context<{}> = React.createContext({});

export const Main = () => {
  const [page]: [number, any] = useState(1);
  const dispatch = useDispatch()
  const history = useHistory();
  const userData = useSelector(loginSelector.userSelector);
  const delData = useSelector(mainSelector.delUserDataSelector);
  
  const handleDel = (id: any) => {
    dispatch(item.deleteUser(id));
  }
  
  useEffect(() => {
    dispatch(item.getUsers());
  }, [delData,dispatch])


  return <Common>
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader style={{display:"flex",justifyContent:"space-between"}}>
          <h2>ユーザ一覧</h2>
            <CButton
              onClick={() => history.push("/")}
              color={'primary'}>
              ログアウト
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={userData}
              fields={[
                { key: 'name',label:'名前', _classes: 'font-weight-bold' },
                { key: 'role',label:'権限区分'},
                { key: 'email',label:'メールアドレス'},
                { key: 'Edit',label:'操作'}
              ]}
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              clickableRows
              scopedSlots={{
                'Edit':
                  (item: any) => (
                    <td className="edit-area">
                      <CButton
                        onClick={() => history.push({
                          pathname: `/users/edit/${item.id}`,
                          state: { user: item }
                        })}
                        size={'sm'}
                        color={'primary'}>
                        編集
                      </CButton>　
                      <CButton
                        onClick={() => handleDel(item.id)}
                        size={'sm'}
                        color={'danger'}>
                        削除
                      </CButton>
                    </td>
                  )
              }}
            />
          </CCardBody>
          <CCardFooter style={{textAlign:"right"}} >
          <CButton
              onClick={() => history.push("/users/create")}
              color={'success'}>
              新規登録
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </Common>
}