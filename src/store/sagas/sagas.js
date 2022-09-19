import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { API_CALL_REQUEST } from '../actions/asyncActions'

// Watcher SAGA
// Listens the API_CALL_REQUEST actions
export function* watcherSaga() {
    // Listens the action and starts a worker Saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// Worker Saga
// Called form watcher Saga, does login and dispatches action
export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request))
        // Get token from response
        const token = response.data.token
        yield put({
            type: action.payload.okAction,
            payload: {
                token
            }
        })
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error
            }
        })
    }
}

const fetchHttp = (request) => {
    return () => {
        return axios(request)
    }
}