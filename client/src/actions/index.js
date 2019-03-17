import streams from '../apis/streams';
import actionTypes from './types';

export const signIn = (userId) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: userId,
    };
};

export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT,
    };
};

export const createStream = formValues => async dispatch => {
    const response = await streams.post('/streams', formValues);
    dispatch({ 
        type: actionTypes.CREATE_STREAM,
        payload: response.data,
    });
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({ 
        type: actionTypes.FETCH_STREAMS,
        payload: response.data,
    });
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ 
        type: actionTypes.FETCH_STREAM,
        payload: response.data,
    });
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({ 
        type: actionTypes.EDIT_STREAM,
        payload: response.data,
    });
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ 
        type: actionTypes.DELETE_STREAM,
        payload: id,
    });
};
