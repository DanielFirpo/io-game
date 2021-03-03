export const SET_CANVAS = "SET_CANVAS";

export const setCanvas = (canvas) => dispatch => {

    dispatch({ type: SET_CANVAS, payload: canvas });

}