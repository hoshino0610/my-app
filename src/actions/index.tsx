import { createAction } from '../utils'
import { ITEM } from './types'

interface User {
  username: string,
  email: string,
  role: string,
  name: string,
  password: string
}
interface Movie {
  id?: number,
  movie_name: string,
  douban_id: string,
  director: string,
  lead_actors: string,
  movie_type: string
}
interface UpdateUser {
  id: number
}
export const item = {
  login: (username:String,password:String)=>
  createAction(ITEM.LOGIN,{username,password, fetching: true, success: false, error: null }),
  getUsers: () => createAction(ITEM.GETUSER, {fetching: true, success: false, error: null }),
  saveUser: (userData: User) => createAction(ITEM.SAVEUSER, {
    userData, fetching: true, success: false, error: null,
  }),
  deleteUser: (deltetUserId: any) => createAction(ITEM.DELETEUSER, {
    deltetUserId, fetching: true, success: false, error: null,
  }),
  updateUser: (updateUserData: User&UpdateUser) => createAction(ITEM.UPDATEUSER, {
    updateUserData, fetching: true, success: false, error: null,
  }),
  updateUserSuccess: (updateUserData: any) => createAction(ITEM.SAVEUSERSUCCESS, {
    updateUserData, fetching: false, success: true, error: null,
  }),
  userSuccess: (data: any) => createAction(ITEM.SUCCESS, {
    ...data, fetching: false, success: true, error: null,
  }),
  saveUserSuccess: (SaveUserData: any) => createAction(ITEM.SAVEUSERSUCCESS, {
    SaveUserData, fetching: false, success: true, error: null,
  }),
  deleteUserSuccess: (deltetUserId: any) => createAction(ITEM.DELETEUSERSUCCESS, {
    deltetUserId, fetching: false, success: true, error: null,
  }),
  getMovies: () => createAction(ITEM.GETMOVIES, {fetching: true, success: false, error: null }),
  getMoviesSuccess: (movieList:Array<Movie>) => createAction(ITEM.GETMOVIESSUCCESS, {movieList,fetching: true, success: false, error: null }),
  saveMovies: (movie: Movie) => createAction(ITEM.SAVEMOVIES, {
    movie, fetching: true, success: false, error: null,
  }),
  saveMoviesSuccess: (movie: any) => createAction(ITEM.SAVEMOVIESSUCCESS, {
    movie, fetching: true, success: false, error: null,
  }),
  success: (data: any) => createAction(ITEM.SUCCESS, {
    ...data, fetching: false, success: true, error: null,
  }),
  failure: (error: any) => createAction(ITEM.FAILURE, { ...error, fetching: false, success: false }),
}
