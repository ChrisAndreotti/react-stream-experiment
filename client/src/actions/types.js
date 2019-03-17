const createActionTypes = (actionTypes) => {
    const result = {};
    actionTypes.forEach((actionType) => {
        result[actionType] = actionType;
    });
    return result;
};

const actionTypes = createActionTypes([
    'SIGN_IN',
    'SIGN_OUT',
    'CREATE_STREAM',
    'FETCH_STREAMS',
    'FETCH_STREAM',
    'DELETE_STREAM',
    'EDIT_STREAM',
]);

export default actionTypes;
