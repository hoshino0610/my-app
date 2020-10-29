import {
  put, call, takeLatest, all,
} from 'redux-saga/effects'
import axios from 'axios'

import { ITEM } from '../actions/types'

import { item } from '../actions'

function* handleGetMovies() {
  try {
    const { data } = yield call(axios.get, '/api/movies')
    yield put(item.getMoviesSuccess(data))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* handleSaveMovies(action) {
  try {
    const { Movie } = action.payload
    const { data } = yield call(axios.post, '/api/movies',Movie)
    yield put(item.saveMoviesSuccess(data))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* moviesSagas() {
  yield all([
    takeLatest(ITEM.GETMOVIES, handleGetMovies),
    takeLatest(ITEM.SAVEMOVIES, handleSaveMovies)
  ])
}

export default moviesSagas
