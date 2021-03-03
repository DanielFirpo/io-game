import {
    SET_CANVAS
} from "../actions/actions"

let initialState = {
    canvas: undefined
}

function reducer(state = initialState, action) {
    console.log(
        "Reducer working, current action: ",
        action.type,
        " Payload: ",
        action.payload
    );

    switch (action.type) {
        case SET_CANVAS:
            return {
                ...state,
                canvas: action.payload
            }
        default:
            console.log(`\nUnknown action type:\n${action.type}`);
            return {
                ...state
            };
    }
}

export default reducer;