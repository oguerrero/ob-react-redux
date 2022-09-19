// Async Action Types
export const API_CALL_REQUEST = 'API_CALL_REQUEST' // Watcher Saga listen
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS' // Dispatched by Worker Saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE'

export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
                email,
                password
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}

// Generic http Request dispatcher
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            method,
            url,
            data,
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}