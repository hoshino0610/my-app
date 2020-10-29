import { createActionTypes } from '../utils'

export const ITEM:any = createActionTypes('ITEM', [
  'LOGIN',
  'GETUSER',
  'GET',
  'SAVEUSER',
  'SAVEUSERSUCCESS',
  'DELETEUSER',
  'DELETEUSERSUCCESS',
  'UPDATEUSER',
  'UPDATEUSERSUCCESS',
  'USERSUCCESS',
  'GETMOVIES',
  'GETMOVIESSUCCESS',
  'SAVEMOVIES',
  'SAVEMOVIESSUCCESS',
  'SUCCESS',
  'FAILURE',
])

export default ITEM
