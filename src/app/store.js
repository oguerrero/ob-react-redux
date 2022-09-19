import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from '../store/reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from '../store/sagas/sagas'

export const store = configureStore({
    reducer: rootReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

export const createAsyncStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware
    })
    sagaMiddleware.run(watcherSaga)
    return store
}
