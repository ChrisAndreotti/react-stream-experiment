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
]);

export default actionTypes;
