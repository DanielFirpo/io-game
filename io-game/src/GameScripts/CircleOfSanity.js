import store from "./../reduxStore"

let entryPoint = () => {
    const unsubscribe = store.subscribe(handleChange)
    if(store.getState().canvas) {
        handleChange()
    }
}

function handleChange() {

    if (store.getState().canvas) {
        drawCircleRepeatedly();
    }

}

function drawCircleRepeatedly() {

    let c = store.getState().canvas.getContext("2d");

    c.beginPath();
    c.arc(window.innerWidth / 2 - 10, window.innerHeight / 2 - 10, 20, 0, 2 * Math.PI);
    c.fill();

    setTimeout(() => {
        drawCircleRepeatedly()
    }, 100);

}


export default entryPoint;